use salvo::prelude::*;

/// test function to check if Salvo is running
#[handler]
async fn run_salvo() -> &'static str {
    "Hello, world!"
}

#[tokio::main()]
async fn main() {
    tracing_subscriber::fmt().init();

    let router = Router::new()
        .push(Router::new().path("").get(run_salvo));

    let acceptor = TcpListener::new("0.0.0.0:5000").bind().await;
    Server::new(acceptor).serve(router).await;
}

