import "./index.css";
import { BiCopy } from "react-icons/bi";

import { useStorage } from "@plasmohq/storage/hook";
import { useState } from "react";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

function Snippet({
  text,
  deleteSnip,
}: {
  text: string;
  deleteSnip: (snip: string) => void;
}) {
  const [copied, setCopied] = useState(false);
  function handleCopyClick() {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }
  function handleDeleteClick() {
    deleteSnip(text);
  }
  return (
    <div
      className="snippet"
      style={{
        display: "flex",
        border: "1px solid #2673CD",
        borderRadius: 8,
        paddingInline: 6,
        marginBlock: 4,
        justifyContent: "space-between",
      }}
    >
      <p>{text}</p>
      <div style={{ display: "flex" }}>
        <button style={{ height: "100%" }} onClick={handleCopyClick}>
          <BiCopy />
          <p style={{ fontSize: "10px", padding: 0, margin: 0 }}>
            {copied ? "Copied!" : "Copy"}
          </p>
        </button>
        <button
          style={{ height: "100%", color: "darkred" }}
          onClick={handleDeleteClick}
        >
          {"X"}
        </button>
      </div>
    </div>
  );
}

function IndexPopup() {
  const [snips, setSnips] = useStorage<string[]>("snips", []);
  const [snip, setSnip] = useState("");

  function addSnip(e) {
    e.preventDefault();
    setSnips([...snips, snip]);
    setSnip("");
  }

  function deleteSnip(snip: string) {
    setSnips((snips) => snips.filter((s) => s !== snip));
  }

  return (
    <div style={{ width: "fit-content" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 16,
          paddingTop: 4,
          backgroundColor: "#1e2b3a",
          color: "#f2f2f2",
        }}
      >
        <h1>Snippy</h1>
        {snips.map((snip) => (
          <Snippet key={Math.random()} text={snip} deleteSnip={deleteSnip} />
        ))}
        <form
          onSubmit={addSnip}
          style={{
            display: "flex",
            border: "1px solid #2673CD",
            borderRadius: 8,
          }}
        >
          <input onChange={(e) => setSnip(e.target.value)} value={snip} />
          <button style={{ fontSize: 18 }} onClick={addSnip}>
            +
          </button>
        </form>
      </div>
    </div>
  );
}

export default IndexPopup;
