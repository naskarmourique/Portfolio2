import React, { useEffect, useRef, useCallback } from 'react';

/**
 * Realistic bow-and-arrow cursor rendered on a <canvas>.
 * The arrow tip is the "click point" (top-left of the canvas maps to mouse position).
 * On hover over clickable elements, the bowstring pulls back — "drawn" state.
 */
const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100 });
  const isPointerRef = useRef(false);
  const drawAmountRef = useRef(0); // 0 = resting, 1 = fully drawn
  const animRef = useRef<number>(0);

  /* ── Draw the bow + arrow on canvas ── */
  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Smoothly animate draw amount
    const target = isPointerRef.current ? 1 : 0;
    drawAmountRef.current += (target - drawAmountRef.current) * 0.12;

    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    const draw = drawAmountRef.current;

    // Position canvas so arrow tip = mouse position
    canvas.style.transform = `translate(${mx}px, ${my}px)`;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();

    // Everything is drawn relative to origin (0,0) = arrow tip
    // Arrow points toward top-left (northwest), bow curves behind it

    const gold = '#d4af37';
    const goldDim = 'rgba(212,175,55,0.5)';
    const shaft = 'rgba(180,160,120,0.9)';
    const dark = 'rgba(80,60,30,0.9)';

    // ── ARROW ──
    const arrowLen = 42;
    const angle = Math.PI / 4; // 45 degrees (pointing top-left)
    const tipX = 2;
    const tipY = 2;
    const tailX = tipX + Math.cos(angle) * arrowLen;
    const tailY = tipY + Math.sin(angle) * arrowLen;

    // Pull-back offset when drawn
    const pullBack = draw * 14;
    const shaftEndX = tailX + Math.cos(angle) * pullBack;
    const shaftEndY = tailY + Math.sin(angle) * pullBack;

    // Arrow shaft
    ctx.beginPath();
    ctx.moveTo(tipX, tipY);
    ctx.lineTo(shaftEndX, shaftEndY);
    ctx.strokeStyle = shaft;
    ctx.lineWidth = 1.8;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Arrowhead (triangle)
    ctx.save();
    ctx.translate(tipX, tipY);
    ctx.rotate(angle - Math.PI);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-5, -12);
    ctx.lineTo(5, -12);
    ctx.closePath();
    ctx.fillStyle = gold;
    ctx.fill();
    // Arrowhead dark center line
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -11);
    ctx.strokeStyle = 'rgba(0,0,0,0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();

    // Fletching (feathers at tail)
    ctx.save();
    ctx.translate(shaftEndX, shaftEndY);
    ctx.rotate(angle);
    // Left feather
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-6, -4, -3, -10);
    ctx.strokeStyle = goldDim;
    ctx.lineWidth = 1.2;
    ctx.stroke();
    // Right feather
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(6, -4, 3, -10);
    ctx.stroke();
    // Nock (small notch at the very end)
    ctx.beginPath();
    ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = dark;
    ctx.fill();
    ctx.restore();

    // ── BOW ──
    // Bow is positioned near the tail of the arrow
    const bowCenterX = tailX - Math.cos(angle) * 3;
    const bowCenterY = tailY - Math.sin(angle) * 3;
    const bowRadius = 28;
    // Bow limbs curve perpendicular to arrow direction
    const perpAngle = angle + Math.PI / 2;

    // Top limb tip
    const topX = bowCenterX + Math.cos(perpAngle) * bowRadius;
    const topY = bowCenterY + Math.sin(perpAngle) * bowRadius;
    // Bottom limb tip
    const botX = bowCenterX - Math.cos(perpAngle) * bowRadius;
    const botY = bowCenterY - Math.sin(perpAngle) * bowRadius;

    // Bow curvature — the stave bows away from arrow
    const bowBulge = 18 + draw * 10;
    const bulgeDirX = -Math.cos(angle) * bowBulge;
    const bulgeDirY = -Math.sin(angle) * bowBulge;

    // Draw bow stave (wooden part)
    ctx.beginPath();
    ctx.moveTo(topX, topY);
    ctx.quadraticCurveTo(
      bowCenterX + bulgeDirX,
      bowCenterY + bulgeDirY,
      botX, botY
    );
    ctx.strokeStyle = dark;
    ctx.lineWidth = 3.5;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Bow stave highlight
    ctx.beginPath();
    ctx.moveTo(topX, topY);
    ctx.quadraticCurveTo(
      bowCenterX + bulgeDirX * 0.95,
      bowCenterY + bulgeDirY * 0.95,
      botX, botY
    );
    ctx.strokeStyle = 'rgba(212,175,55,0.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Bow limb tips (decorative nubs)
    [{ x: topX, y: topY }, { x: botX, y: botY }].forEach(({ x, y }) => {
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = gold;
      ctx.fill();
    });

    // ── BOWSTRING ──
    // String goes from top tip to nock (arrow tail) to bottom tip
    const nockX = shaftEndX;
    const nockY = shaftEndY;

    ctx.beginPath();
    ctx.moveTo(topX, topY);
    ctx.lineTo(nockX, nockY);
    ctx.lineTo(botX, botY);
    ctx.strokeStyle = `rgba(220,200,160,${0.5 + draw * 0.4})`;
    ctx.lineWidth = 0.8 + draw * 0.4;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // ── GLOW on hover ──
    if (draw > 0.05) {
      ctx.save();
      ctx.globalAlpha = draw * 0.4;
      ctx.beginPath();
      ctx.arc(tipX, tipY, 6, 0, Math.PI * 2);
      const glow = ctx.createRadialGradient(tipX, tipY, 0, tipX, tipY, 6);
      glow.addColorStop(0, gold);
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
    animRef.current = requestAnimationFrame(render);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      isPointerRef.current =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains('cursor-pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    animRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animRef.current);
    };
  }, [render]);

  return (
    <canvas
      ref={canvasRef}
      width={110}
      height={110}
      className="fixed top-0 left-0 z-[10000] pointer-events-none hidden md:block"
      style={{ marginLeft: -5, marginTop: -5 }}
    />
  );
};

export default CustomCursor;
