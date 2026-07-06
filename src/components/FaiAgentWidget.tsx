import Script from "next/script";

export default function FaiAgentWidget() {
  return (
    <Script
      src="https://api.faiagent.my.id/widget/chat-widget.js"
      data-widget-key="5e6d0779-5144-4f1f-84ad-b3b89b760d44"
      data-api-url="https://api.faiagent.my.id/api/chat"
      strategy="lazyOnload"
    />
  );
}
