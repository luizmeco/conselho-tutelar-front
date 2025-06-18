import React from "react";

const ErrorPage = () => {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }} className="text-danger">
            <h1>404</h1>
            <h1>Página não encontrada</h1>
        </div>
    );
};

export default ErrorPage;