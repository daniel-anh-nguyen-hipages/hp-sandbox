import { useState } from "react";

import { socket } from "../server/socket";

import { TradieMessage } from "./Message";

export const App = () => {
  const [isSocketConnected, setIsSocketConnected] = useState(false);

  /** Connect to socket. */
  const handleConnect = () => {
    if (isSocketConnected) return;

    setIsSocketConnected(true);
    socket.onMessage((message) => {
      console.log(message);
    });
  };

  /** Disconnect from socket. */
  const handleDisconnect = () => {
    if (!isSocketConnected) return;

    setIsSocketConnected(false);
    socket.disconnect();
  };

  return (
    <main className="w-screen h-screen flex flex-col bg-gray-100 p-2">
      <h1 className="px-4 text-3xl">Magical Tradie Chats</h1>
      <hr className="my-4" />
      <div className="px-4">
        {isSocketConnected ? (
          <button
            className="bg-red-500 text-white rounded-lg w-80 px-4 py-2"
            onClick={handleDisconnect}
          >
            Disconnect
          </button>
        ) : (
          <button className="px-4 py-2 bg-orange-300 rounded-lg w-80" onClick={handleConnect}>
            Let’s connect & trade up ⤴️
          </button>
        )}
        <TradieMessage />
      </div>
    </main>
  );
};
