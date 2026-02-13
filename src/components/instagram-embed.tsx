"use client";

import { useEffect, useRef } from "react";

type InstagramEmbedProps = {
  permalink: string;
};

export const InstagramEmbed = ({ permalink }: InstagramEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const embedUrl = `${permalink.split("?")[0]}embed`;

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = embedUrl;
    }
  }, [embedUrl]);

  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg shadow-slate-300/40">
      <div className="relative h-[620px] w-full">
        <iframe
          ref={iframeRef}
          title="Instagram reel"
          className="absolute inset-0 h-full w-full rounded-[28px]"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
