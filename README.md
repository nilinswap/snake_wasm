# Snake-game. 
A simple game with rust at its back and javascript at its face knitted together using WebAssembly. wasm-pack is used to template the application.
![Screenshot](sc.png)


# Setup
Get Rust and wasm-pack installed- Follow this[https://rustwasm.github.io/book/game-of-life/setup.html] link.

# Run
run `wasm-pack build` (run this everytime rust files change.)
Change directory to www and run `npm run start` to start the node-server. Open localhost:8000/ to see my snake.


# How it works

`npm run build` creates a dist folder and puts all relevant files inside it. There are two js files and one wasm file
and one html file. So npm-run-build uses webpack.config.js which says a few things.. 
1. create an index.html
2. start from bootstrap.js 
3. write into dist folder

but how does wasm come into picture?

`wasm-pack build` is used to rust compile rust source based on cargo.toml and write wasm modules inside pkg folder. In www/package.json, we add pkg folder as dependency and now we can use wasm modules in our js code as done in index.js.



# few caveats about wasm 

1. you can view source on wasm. and read it! but that doesn't mean wasm is js. It is a support that web community has provided so that wasm can be debugged. 

2. wasm file is imported as a js module. but it is actually binary!

3. wasm function can only return integers to js. For string, array etc, they use something called wasm memory which is basically writing the data in memory and letting js reach it. it is very much like asm here.