import ChatsList from "./ChatsList";

export function MessageList({ texts }) {
  return (
    <div className="c-chat">
      {texts.length === 0 && "No messages"}
      {texts.map((text) => {
        return (
          <div className="c-msg">
            <p key={text.id}>
              <label className="c-msg-bg">{text.title}</label>
            </p>
          </div>
        );
      })}
    </div>
  );
}
