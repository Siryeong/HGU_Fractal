function drawEllipseWithEllipse(ctx, cx, cy, rx, ry, style) {
        if(ctx.ellipse)
        {
          ctx.save();
          ctx.beginPath();
          ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2);
          ctx.strokeStyle=style;
          ctx.stroke();
          ctx.restore();
        }
      }
