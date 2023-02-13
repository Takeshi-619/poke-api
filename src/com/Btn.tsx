import React from "react";

function Btn({ href }: { href: string }) {
  return (
    <div className="btn-content">
      <a href={href}>Get Start</a>
    </div>
  );
}

export default Btn;
