# 28Tech Competitive Companion Extension

## Giới thiệu (Introduction)

Extension này hỗ trợ tích hợp trang web `oj.28tech.com.vn` với **Competitive Companion**, giúp các bạn làm bài tập trên 28Tech OJ có thể dễ dàng parse đề bài vào VS Code (CPH), CP Editor, v.v.

*(This extension integrates `oj.28tech.com.vn` with **Competitive Companion**, allowing users on 28Tech OJ to easily parse problems into VS Code (CPH), CP Editor, etc.)*

## Tính năng (Features)

- **Tự động nhận diện bài tập**: Parse tên bài, giới hạn thời gian (Time Limit), giới hạn bộ nhớ (Memory Limit).
  *(Automatically detects problems: Parses problem name, Time Limit, Memory Limit.)*
- **Xử lý Input/Output thông minh**: 
  - Tự động trích xuất các mẫu Input/Output từ đề bài.
  - Hỗ trợ cả 2 cơ chế parse của Competitive Companion: **Generic Parser** (JSON) và **DMOJ Parser**.
  *(Smart Input/Output handling:*
  - *Automatically extracts Input/Output samples from the problem.*
  - *Supports both Competitive Companion parsing mechanisms: **Generic Parser** (JSON) and **DMOJ Parser**.)*

## Cách cài đặt (Installation)

Vì extension này chưa có trên Store, bạn cần cài đặt thủ công (Developer Mode):
*(Since this extension is not on the Store yet, you need to install it manually (Developer Mode):)*

1.  Tải hoặc Clone thư mục `28Tech_ext` về máy.
    *(Download or Clone the `28Tech_ext` folder to your computer.)*
2.  Mở trình duyệt Chrome/Edge, truy cập `chrome://extensions/`.
    *(Open Chrome/Edge browser, go to `chrome://extensions/`.)*
3.  Bật chế độ **Developer mode** (góc trên bên phải).
    *(Enable **Developer mode** (top right corner).)*
4.  Nhấn vào nút **Load unpacked** (Tải tiện ích đã giải nén).
    *(Click the **Load unpacked** button.)*
5.  Chọn thư mục chứa extension này.
    *(Select the folder containing this extension.)*

## Hướng dẫn sử dụng (Usage)

1.  Cài đặt extension **Competitive Companion** trên trình duyệt.
    *(Install the **Competitive Companion** extension on your browser.)*
2.  Mở một bài tập bất kỳ trên `oj.28tech.com.vn`.
    *(Open any problem on `oj.28tech.com.vn`.)*
3.  Nhấn vào biểu tượng **Competitive Companion** trên thanh công cụ của trình duyệt.
    *(Click the **Competitive Companion** icon on the browser toolbar.)*
4.  Đề bài sẽ được gửi đến công cụ lập trình của bạn (VS Code, CP Editor...).
    *(The problem will be sent to your coding tool (VS Code, CP Editor...).)*

## Cấu hình Competitive Companion (Configuration)

Để Competitive Companion nhận diện chính xác trang web này như một trang DMOJ (tùy chọn), bạn có thể cấu hình như sau:
*(To let Competitive Companion explicitly recognize this site as a DMOJ site (optional), you can configure it as follows:)*

1.  Mở cài đặt của Competitive Companion (Extension options).
    *(Open Competitive Companion settings.)*
2.  Trong mục **Custom rules**, thêm dòng sau:
    *(In **Custom rules**, add the following:)*
    - **Regex**: `^https://oj\.28tech\.com\.vn/problem/.*`
    - **Parser**: `DMOJProblemParser`

