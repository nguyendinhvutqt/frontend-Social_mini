import React, { createContext, useContext, useEffect } from "react";
import { socket } from "../socket";
interface SocketContextProps {
  socket: typeof socket;
}

const SocketContext = createContext<SocketContextProps | null>(null);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Kết nối socket khi component được mount
    socket.connect();

    // Xử lý ngắt kết nối
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom hook để sử dụng Socket
// eslint-disable-next-line react-refresh/only-export-components
export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context.socket;
};
