# 28Tech Competitive Companion Extension

## Giới thiệu (Introduction)

Extension này hỗ trợ tích hợp **28Tech OJ** với **Competitive Companion**, giúp parse đề bài và test case vào VS Code (CPH), CP Editor,...

*(Integrates 28Tech OJ with Competitive Companion for parsing problems and test cases.)*

## Tính năng (Features)

*   **Tự động nhận diện (Auto Detection)**: Tên bài, Time Limit, Memory Limit.
*   **DMOJ Support**: Inject dữ liệu tương thích với DMOJ để Competitive Companion nhận diện chính xác.

## Cài đặt (Installation)

1.  Tải và giải nén source code.
2.  Truy cập `chrome://extensions/`, bật **Developer mode**.
3.  Chọn **Load unpacked** và trỏ tới thư mục extension.

## Cấu hình (Configuration)

Để hoạt động, bạn **CẦN** cấu hình Competitive Companion như sau:

1.  Mở **Extension options** của Competitive Companion.
2.  Trong mục **Custom rules**, thêm:

| Match URL | Parser |
| :--- | :--- |
| `^https://oj\.28tech\.com\.vn/problem/.*` | `DMOJProblemParser` |

**Copy Regex:**
```regex
^https://oj\.28tech\.com\.vn/problem/.*
```

## Đóng góp (Contribution)
**Author**: Nguyen Hoang Duc Tam (B25DCCN523)
