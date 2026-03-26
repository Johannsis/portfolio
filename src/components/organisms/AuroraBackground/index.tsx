import 'server-only';

function AuroraBackground(): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 [&>div]:mix-blend-screen"
    >
      <div className="animate-blob absolute top-[-10%] left-[-8%] size-[65%] [animation-delay:-2s] [animation-direction:alternate] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-glacier),transparent_100%)]" />
      <div className="animate-blob-orbit absolute top-[-8%] right-[-8%] size-[72%] [animation-delay:-8s] [animation-direction:reverse] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-lagoon),transparent_100%)]" />
      <div className="animate-blob absolute bottom-[-10%] left-[8%] size-[68%] [animation-delay:-12s] [animation-direction:alternate-reverse] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-cyan),transparent_100%)]" />
      <div className="animate-blob-slow absolute right-[-6%] bottom-[-8%] size-[70%] [animation-delay:-15s] [animation-direction:reverse] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-indigo),transparent_100%)]" />
      <div className="animate-blob-orbit-slow absolute bottom-[-8%] left-[-6%] size-[74%] [animation-delay:-20s] [animation-direction:alternate] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-violet),transparent_100%)]" />
      <div className="animate-blob absolute top-[24%] left-[-4%] size-[52%] [animation-delay:-10s] [animation-direction:alternate-reverse] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-orchid),transparent_100%)]" />
      <div className="animate-blob-orbit absolute top-[-6%] right-[8%] size-[48%] [animation-delay:-18s] [animation-direction:reverse] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-rose),transparent_100%)]" />
      <div className="animate-blob absolute right-[16%] bottom-[-6%] size-[46%] [animation-delay:-24s] [animation-direction:alternate] [background:radial-gradient(closest-side_circle_at_center_in_oklab,var(--aurora-amber),transparent_100%)]" />
    </div>
  );
}

export default AuroraBackground;
