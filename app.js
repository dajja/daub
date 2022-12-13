// 1. NodeJS là 1 runtime giúp cho JS có thể chạy trên server

// 2. Mô hình client-server 

// client (browsers) ----Request--> server
//                   <---Response--- 
// Request (GET/POST/PUT/DELETE)
// Response (HTML , CSS , JS , Json...)

// 3. CSR và SSR
// Client-side rendering
// server sẽ gửi thông tin về cho client dưới dạng Json và browser
// sẽ render ra những thông tin đó
// VD:  build trang front-end dựa vào API

// Server-side rendering
// server sẽ gửi về HTML , CSS , JS... cho client và browser sẽ 
// render ra trang web mong muốn 
// VD: toàn bộ HTML,CSS,JS sẽ đc build tại backend (server)


// npm - node package manager 

// 1. npm init 
// khởi tạo 1 file package.json
// file package.json là nơi lưu trữ các thông tin về project nodejs

// 2. npm install(i) + package_name 
// muốn cài đặt gói (package) nào thì tìm trên chợ npm (npmjs.com)

// 3. Trường dependencies trong package.json 
// Quản lí thông tin về các packages đã cài đặt vào project nodejs
// Trong trường hợp muốn cài lại toàn bộ những package có trong dependencies 
// ----> npm + i

// 4. folder .gitignore
// Khi muốn đẩy project nodejs lên github 
// Khởi tạo 1 file .gitignore và điền những thư mục hoặc file
// ko muốn đẩy lên git vào trong .gitignore

// Sử dụng terminal
// ls - (ktra những j đang có trong thư mục)
// cd [folder] - di chuyển vào trong thư mục nào đó
// cd.. - di chuyển ra khỏi thư mục hiện tại

// 5. Sử dụng node js
// node + enter (truy cập vào runtime)