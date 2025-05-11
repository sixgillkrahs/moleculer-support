"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_PROVINCE = exports.LIST_WARD = exports.LIST_DISTRICT = void 0;
const LIST_PROVINCE = [
    { id: 1, name: "Hồ Chí Minh" },
    { id: 20, name: "Đồng Nai" },
    { id: 15, name: "Cần Thơ" },
    { id: 3, name: "An Giang" },
    { id: 58, name: "Bà Rịa–Vũng Tàu" },
    { id: 5, name: "Bắc Kạn" },
    { id: 6, name: "Bắc Giang" },
    { id: 7, name: "Bạc Liêu" },
    { id: 8, name: "Bắc Ninh" },
    { id: 9, name: "Bến Tre" },
    { id: 61, name: "Bình Dương" },
    { id: 11, name: "Bình Định" },
    { id: 12, name: "Bình Phước" },
    { id: 13, name: "Bình Thuận" },
    { id: 14, name: "Cà Mau" },
    { id: 16, name: "Cao Bằng" },
    { id: 17, name: "Đà Nẵng" },
    { id: 18, name: "Đắk Lắk" },
    { id: 62, name: "Đắk Nông" },
    { id: 19, name: "Điện Biên" },
    { id: 63, name: "Đồng Tháp" },
    { id: 21, name: "Gia Lai" },
    { id: 22, name: "Hà Giang" },
    { id: 23, name: "Hà Nam" },
    { id: 2, name: "Hà Nội" },
    { id: 24, name: "Hậu Giang" },
    { id: 25, name: "Hà Tĩnh" },
    { id: 26, name: "Hải Dương" },
    { id: 27, name: "Hải Phòng" },
    { id: 28, name: "Hòa Bình" },
    { id: 52, name: "Huế" },
    { id: 64, name: "Hưng Yên" },
    { id: 30, name: "Khánh Hòa" },
    { id: 56, name: "Kiên Giang" },
    { id: 65, name: "Kon Tum" },
    { id: 32, name: "Lai Châu" },
    { id: 33, name: "Lâm Đồng" },
    { id: 34, name: "Lạng Sơn" },
    { id: 35, name: "Lào Cai" },
    { id: 36, name: "Long An" },
    { id: 37, name: "Nam Định" },
    { id: 38, name: "Nghệ An" },
    { id: 66, name: "Ninh Bình" },
    { id: 39, name: "Ninh Thuận" },
    { id: 40, name: "Phú Thọ" },
    { id: 41, name: "Phú Yên" },
    { id: 42, name: "Quảng Bình" },
    { id: 43, name: "Quảng Nam" },
    { id: 44, name: "Quảng Ngãi" },
    { id: 45, name: "Quảng Ninh" },
    { id: 46, name: "Quảng Trị" },
    { id: 47, name: "Sóc Trăng" },
    { id: 67, name: "Sơn La" },
    { id: 48, name: "Tây Ninh" },
    { id: 49, name: "Thái Bình" },
    { id: 50, name: "Thái Nguyên" },
    { id: 51, name: "Thanh Hóa" },
    { id: 53, name: "Tiền Giang" },
    { id: 54, name: "Trà Vinh" },
    { id: 55, name: "Tuyên Quang" },
    { id: 60, name: "Vĩnh Long" },
    { id: 57, name: "Vĩnh Phúc" },
    { id: 59, name: "Yên Bái" }
];
exports.LIST_PROVINCE = LIST_PROVINCE;
const LIST_DISTRICT = [
    { id: 1, name: "Quận 1", province: 1 },
    { id: 2, name: "Quận 2", province: 1 },
    { id: 3, name: "Quận 3", province: 1 },
    { id: 4, name: "Quận 4", province: 1 },
    { id: 5, name: "Quận 5", province: 1 },
    { id: 6, name: "Quận 6", province: 1 },
    { id: 7, name: "Quận 7", province: 1 },
    { id: 8, name: "Quận 8", province: 1 },
    { id: 9, name: "Quận 9", province: 1 },
    { id: 10, name: "Quận 10", province: 1 },
    { id: 11, name: "Quận 11", province: 1 },
    { id: 12, name: "Quận 12", province: 1 },
    { id: 13, name: "Quận Phú Nhuận", province: 1 },
    { id: 14, name: "Quận Bình Thạnh", province: 1 },
    { id: 15, name: "Quận Tân Bình", province: 1 },
    { id: 16, name: "Quận Tân Phú", province: 1 },
    { id: 17, name: "Quận Gò Vấp", province: 1 },
    { id: 18, name: "Quận Thủ Đức", province: 1 },
    { id: 19, name: "Quận Bình Tân", province: 1 },
    { id: 20, name: "Huyện Bình Chánh", province: 1 },
    { id: 703, name: "Huyện Hóc Môn", province: 1 },
    { id: 704, name: "Huyện Cần Giờ", province: 1 },
    { id: 705, name: "Huyện Củ Chi", province: 1 },
    { id: 713, name: "Huyện Nhà Bè", province: 1 },
    { id: 21, name: "Quận Ba Đình", province: 2 },
    { id: 22, name: "Quận Hoàn Kiếm", province: 2 },
    { id: 23, name: "Quận Hai Bà Trưng", province: 2 },
    { id: 24, name: "Quận Đống Đa", province: 2 },
    { id: 25, name: "Quận Tây Hồ", province: 2 },
    { id: 26, name: "Quận Cầu Giấy", province: 2 },
    { id: 27, name: "Quận Thanh Xuân", province: 2 },
    { id: 28, name: "Quận Hoàng Mai", province: 2 },
    { id: 29, name: "Quận Long Biên", province: 2 },
    { id: 30, name: "Quận Nam Từ Liêm", province: 2 },
    { id: 31, name: "Huyện Thanh Trì", province: 2 },
    { id: 32, name: "Huyện Gia Lâm", province: 2 },
    { id: 33, name: "Huyện Đông Anh", province: 2 },
    { id: 34, name: "Huyện Sóc Sơn", province: 2 },
    { id: 265, name: "Quận Hà Đông", province: 2 },
    { id: 266, name: "Thị xã Sơn Tây", province: 2 },
    { id: 267, name: "Huyện Ba Vì", province: 2 },
    { id: 268, name: "Huyện Phúc Thọ", province: 2 },
    { id: 269, name: "Huyện Thạch Thất", province: 2 },
    { id: 270, name: "Huyện Quốc Oai", province: 2 },
    { id: 271, name: "Huyện Chương Mỹ", province: 2 },
    { id: 272, name: "Huyện Đan Phượng", province: 2 },
    { id: 273, name: "Huyện Hoài Đức", province: 2 },
    { id: 274, name: "Huyện Thanh Oai", province: 2 },
    { id: 275, name: "Huyện Mỹ Đức", province: 2 },
    { id: 276, name: "Huyện Ứng Hòa", province: 2 },
    { id: 277, name: "Huyện Thường Tín", province: 2 },
    { id: 278, name: "Huyện Phú Xuyên", province: 2 },
    { id: 716, name: "Huyện Mê Linh", province: 2 },
    { id: 749, name: "Quận Bắc Từ Liêm", province: 2 },
    { id: 66, name: "Thành phố Châu Đốc", province: 3 },
    { id: 67, name: "Thành phố Long Xuyên", province: 3 },
    { id: 68, name: "Huyện An Phú", province: 3 },
    { id: 69, name: "Thị xã Tân Châu", province: 3 },
    { id: 70, name: "Huyện Phú Tân", province: 3 },
    { id: 71, name: "Huyện Tịnh Biên", province: 3 },
    { id: 72, name: "Huyện Tri Tôn", province: 3 },
    { id: 73, name: "Huyện Châu Phú", province: 3 },
    { id: 74, name: "Huyện Chợ Mới", province: 3 },
    { id: 75, name: "Huyện Châu Thành", province: 3 },
    { id: 76, name: "Huyện Thoại Sơn", province: 3 },
    { id: 127, name: "Thành phố Bắc Kạn", province: 5 },
    { id: 128, name: "Huyện Chợ Đồn", province: 5 },
    { id: 129, name: "Huyện Bạch Thông", province: 5 },
    { id: 130, name: "Huyện Na Rì", province: 5 },
    { id: 131, name: "Huyện Ngân Sơn", province: 5 },
    { id: 132, name: "Huyện Ba Bể", province: 5 },
    { id: 133, name: "Huyện Chợ Mới", province: 5 },
    { id: 134, name: "Huyện Pắc Nặm", province: 5 },
    { id: 135, name: "Thành phố Bắc Giang", province: 6 },
    { id: 136, name: "Huyện Yên Thế", province: 6 },
    { id: 137, name: "Huyện Sơn Động", province: 6 },
    { id: 138, name: "Huyện Lục Ngạn", province: 6 },
    { id: 139, name: "Huyện Lục Nam", province: 6 },
    { id: 140, name: "Huyện Tân Yên", province: 6 },
    { id: 141, name: "Huyện Hiệp Hòa", province: 6 },
    { id: 142, name: "Huyện Lạng Giang", province: 6 },
    { id: 143, name: "Huyện Việt Yên", province: 6 },
    { id: 144, name: "Huyện Yên Dũng", province: 6 },
    { id: 121, name: "Thành phố Bạc Liêu", province: 7 },
    { id: 122, name: "Huyện Vĩnh Lợi", province: 7 },
    { id: 123, name: "Huyện Hồng Dân", province: 7 },
    { id: 124, name: "Huyện Giá Rai", province: 7 },
    { id: 125, name: "Huyện Phước Long", province: 7 },
    { id: 126, name: "Huyện Đông Hải", province: 7 },
    { id: 721, name: "Huyện Hòa Bình", province: 7 },
    { id: 145, name: "Thành phố Bắc Ninh", province: 8 },
    { id: 146, name: "Huyện Yên Phong", province: 8 },
    { id: 147, name: "Huyện Tiên Du", province: 8 },
    { id: 148, name: "Huyện Quế Võ", province: 8 },
    { id: 149, name: "Thị xã Từ Sơn", province: 8 },
    { id: 150, name: "Huyện Thuận Thành", province: 8 },
    { id: 151, name: "Huyện Gia Bình", province: 8 },
    { id: 152, name: "Huyện Lương Tài", province: 8 },
    { id: 153, name: "Thành phố Bến Tre", province: 9 },
    { id: 154, name: "Huyện Chợ Lách", province: 9 },
    { id: 155, name: "Huyện Châu Thành", province: 9 },
    { id: 156, name: "Huyện Mỏ Cày Bắc", province: 9 },
    { id: 157, name: "Huyện Giồng Trôm", province: 9 },
    { id: 158, name: "Huyện Bình Đại", province: 9 },
    { id: 159, name: "Huyện Ba Tri", province: 9 },
    { id: 160, name: "Huyện Thạnh Phú", province: 9 },
    { id: 722, name: "Huyện Mỏ Cày Nam", province: 9 },
    { id: 109, name: "Thành phố Quy Nhơn", province: 11 },
    { id: 110, name: "Huyện An Lão", province: 11 },
    { id: 112, name: "Huyện Hoài Ân", province: 11 },
    { id: 113, name: "Huyện Hoài Nhơn", province: 11 },
    { id: 114, name: "Huyện Phù Mỹ", province: 11 },
    { id: 115, name: "Huyện Phù Cát", province: 11 },
    { id: 116, name: "Huyện Vĩnh Thạnh", province: 11 },
    { id: 117, name: "Huyện Tây Sơn", province: 11 },
    { id: 118, name: "Huyện Vân Canh", province: 11 },
    { id: 119, name: "Thị xã An Nhơn", province: 11 },
    { id: 120, name: "Huyện Tuy Phước", province: 11 },
    { id: 92, name: "Thị xã Đồng Xoài", province: 12 },
    { id: 93, name: "Huyện Đồng Phù", province: 12 },
    { id: 94, name: "Huyện Chơn Thành", province: 12 },
    { id: 95, name: "Thị xã Bình Long", province: 12 },
    { id: 96, name: "Huyện Lộc Ninh", province: 12 },
    { id: 97, name: "Huyện Bù Đốp", province: 12 },
    { id: 98, name: "Thị xã Phước Long", province: 12 },
    { id: 99, name: "Huyện Bù Đăng", province: 12 },
    { id: 723, name: "Huyện Bù Gia Mập", province: 12 },
    { id: 724, name: "Huyện Hớn Quản", province: 12 },
    { id: 756, name: "Huyện Phú Riềng", province: 12 },
    { id: 100, name: "Thành phố Phan Thiết", province: 13 },
    { id: 101, name: "Huyện Tuy Phong", province: 13 },
    { id: 102, name: "Huyện Bắc Bình", province: 13 },
    { id: 103, name: "Huyện Hàm Thuận Bắc", province: 13 },
    { id: 104, name: "Huyện Hàm Thuận Nam", province: 13 },
    { id: 105, name: "Huyện Hàm Tân", province: 13 },
    { id: 106, name: "Huyện Đức Linh", province: 13 },
    { id: 107, name: "Huyện Tánh Linh", province: 13 },
    { id: 108, name: "Huyện Phú Quí", province: 13 },
    { id: 719, name: "Thị xã La Gi", province: 13 },
    { id: 182, name: "Thành phố Cà Mau", province: 14 },
    { id: 183, name: "Huyện Cái Nước", province: 14 },
    { id: 184, name: "Huyện Trần Văn Thời", province: 14 },
    { id: 185, name: "Huyện U Minh", province: 14 },
    { id: 186, name: "Huyện Thới Bình", province: 14 },
    { id: 187, name: "Huyện Đầm Dơi", province: 14 },
    { id: 188, name: "Huyện Ngọc Hiển", province: 14 },
    { id: 189, name: "Huyện Năm Căn", province: 14 },
    { id: 190, name: "Huyện Phú Tân", province: 14 },
    { id: 174, name: "Quận Bình Thủy", province: 15 },
    { id: 175, name: "Quận Ninh Kiều", province: 15 },
    { id: 176, name: "Quận Cái Răng", province: 15 },
    { id: 177, name: "Quận Ô Môn", province: 15 },
    { id: 178, name: "Huyện Phong Điền", province: 15 },
    { id: 179, name: "Huyện Cờ Đỏ", province: 15 },
    { id: 180, name: "Huyện Vĩnh Thạnh", province: 15 },
    { id: 181, name: "Quận Thốt Nốt", province: 15 },
    { id: 725, name: "Huyện Thới Lai", province: 15 },
    { id: 161, name: "Thành phố Cao Bằng", province: 16 },
    { id: 162, name: "Huyện Trùng Khánh", province: 16 },
    { id: 163, name: "Huyện Bảo Lạc", province: 16 },
    { id: 164, name: "Huyện Thông Nông", province: 16 },
    { id: 165, name: "Huyện Hà Quảng", province: 16 },
    { id: 166, name: "Huyện Trà Lĩnh", province: 16 },
    { id: 167, name: "Huyện Nguyên Bình", province: 16 },
    { id: 168, name: "Huyện Hòa An", province: 16 },
    { id: 169, name: "Huyện Quảng Uyên", province: 16 },
    { id: 170, name: "Huyện Thạch An", province: 16 },
    { id: 171, name: "Huyện Hạ Lang", province: 16 },
    { id: 172, name: "Huyện Bảo Lâm", province: 16 },
    { id: 173, name: "Huyện Phục Hòa", province: 16 },
    { id: 42, name: "Quận Hải Châu", province: 17 },
    { id: 43, name: "Quận Thanh Khê", province: 17 },
    { id: 44, name: "Quận Ngũ Hành Sơn", province: 17 },
    { id: 46, name: "Quận Sơn Trà", province: 17 },
    { id: 47, name: "Quận Liên Chiểu", province: 17 },
    { id: 48, name: "Quận Cẩm Lệ", province: 17 },
    { id: 49, name: "Huyện Hòa Vang", province: 17 },
    { id: 191, name: "Thành Phố Buôn Ma Thuột", province: 18 },
    { id: 192, name: "Huyện Cư MGar", province: 18 },
    { id: 193, name: "Huyện Krông Búk", province: 18 },
    { id: 194, name: "Huyện Ea H'leo", province: 18 },
    { id: 195, name: "Huyện Krông Năng", province: 18 },
    { id: 196, name: "Huyện Ea Súp", province: 18 },
    { id: 197, name: "Huyện Krông Pắc", province: 18 },
    { id: 198, name: "Huyện Ea Kar", province: 18 },
    { id: 199, name: "Huyện M'đrắk", province: 18 },
    { id: 200, name: "Huyện Krông Ana", province: 18 },
    { id: 201, name: "Huyện Krông Bông", province: 18 },
    { id: 202, name: "Huyện Lăk", province: 18 },
    { id: 203, name: "Huyện Buôn Đôn", province: 18 },
    { id: 717, name: "Thị xã Buôn Hồ", province: 18 },
    { id: 726, name: "Huyện Cư Kuin", province: 18 },
    { id: 694, name: "Thành phố Điện Biên Phủ", province: 19 },
    { id: 695, name: "Thị xã Mường Lay", province: 19 },
    { id: 696, name: "Huyện Mường Chà", province: 19 },
    { id: 697, name: "Huyện Mường Nhé", province: 19 },
    { id: 698, name: "Huyện Mường Ảng", province: 19 },
    { id: 699, name: "Huyện Tuần Giáo", province: 19 },
    { id: 700, name: "Huyện Tủa Chùa", province: 19 },
    { id: 701, name: "Huyện Điện Biên", province: 19 },
    { id: 702, name: "Huyện Điện Biên Đông", province: 19 },
    { id: 745, name: "Huyện Nậm Pồ", province: 19 },
    { id: 550, name: "Thành phố Biên Hòa", province: 20 },
    { id: 551, name: "Huyện Vĩnh Cửu", province: 20 },
    { id: 552, name: "Huyện Tân Phú", province: 20 },
    { id: 553, name: "Huyện Định Quán", province: 20 },
    { id: 554, name: "Huyện Thống Nhất", province: 20 },
    { id: 555, name: "Thị xã Long Khánh", province: 20 },
    { id: 556, name: "Huyện Xuân Lộc", province: 20 },
    { id: 557, name: "Huyện Long Thành", province: 20 },
    { id: 558, name: "Huyện Nhơn Trạch", province: 20 },
    { id: 559, name: "Huyện Trảng Bom", province: 20 },
    { id: 560, name: "Huyện Cẩm Mỹ", province: 20 },
    { id: 244, name: "Thành phố Pleiku", province: 21 },
    { id: 245, name: "Huyện Chư Păh", province: 21 },
    { id: 246, name: "Huyện Mang Yang", province: 21 },
    { id: 247, name: "Huyện KBang", province: 21 },
    { id: 248, name: "Thị xã An Khê", province: 21 },
    { id: 249, name: "Huyện Kông Chro", province: 21 },
    { id: 250, name: "Huyện Đức Cơ", province: 21 },
    { id: 251, name: "Huyện Chư Prông", province: 21 },
    { id: 252, name: "Huyện Chư Sê", province: 21 },
    { id: 253, name: "Thị xã AYun Pa", province: 21 },
    { id: 254, name: "Huyện Krông Pa", province: 21 },
    { id: 255, name: "Huyện Ia Grai", province: 21 },
    { id: 256, name: "Huyện Đăk Đoa", province: 21 },
    { id: 257, name: "Huyện Ia Pa", province: 21 },
    { id: 258, name: "Huyện Đăk Pơ", province: 21 },
    { id: 727, name: "Huyện Chư Pưh", province: 21 },
    { id: 728, name: "Huyện Phú Thiện", province: 21 },
    { id: 302, name: "Thành phố Hà Giang", province: 22 },
    { id: 303, name: "Huyện Đồng Văn", province: 22 },
    { id: 304, name: "Huyện Mèo Vạc", province: 22 },
    { id: 305, name: "Huyện Yên Minh", province: 22 },
    { id: 306, name: "Huyện Quản Bạ", province: 22 },
    { id: 307, name: "Huyện Vị Xuyên", province: 22 },
    { id: 308, name: "Huyện Bắc Mê", province: 22 },
    { id: 309, name: "Huyện Hoàng Su Phì", province: 22 },
    { id: 310, name: "Huyện Xín Mần", province: 22 },
    { id: 311, name: "Huyện Bắc Quang", province: 22 },
    { id: 312, name: "Huyện Quang Bình", province: 22 },
    { id: 259, name: "Thành phố Phủ Lý", province: 23 },
    { id: 260, name: "Huyện Duy Tiên", province: 23 },
    { id: 261, name: "Huyện Kim Bảng", province: 23 },
    { id: 262, name: "Huyện Lý Nhân", province: 23 },
    { id: 263, name: "Huyện Thanh Liêm", province: 23 },
    { id: 264, name: "Huyện Bình Lục", province: 23 },
    { id: 706, name: "Thành phố Vị Thanh", province: 24 },
    { id: 707, name: "Thị xã Ngã Bảy", province: 24 },
    { id: 708, name: "Huyện Vị Thủy", province: 24 },
    { id: 709, name: "Huyện Long Mỹ", province: 24 },
    { id: 710, name: "Huyện Phụng Hiệp", province: 24 },
    { id: 711, name: "Huyện Châu Thành", province: 24 },
    { id: 712, name: "Huyện Châu Thành A", province: 24 },
    { id: 758, name: "Thị xã Long Mỹ", province: 24 },
    { id: 279, name: "Thành phố Hà Tĩnh", province: 25 },
    { id: 280, name: "Thị xã Hồng Lĩnh", province: 25 },
    { id: 281, name: "Huyện Hương Sơn", province: 25 },
    { id: 282, name: "Huyện Đức Thọ", province: 25 },
    { id: 283, name: "Huyện Nghi Xuân", province: 25 },
    { id: 284, name: "Huyện Can Lộc", province: 25 },
    { id: 285, name: "Huyện Hương Khê", province: 25 },
    { id: 286, name: "Huyện Thạch Hà", province: 25 },
    { id: 287, name: "Huyện Cẩm Xuyên", province: 25 },
    { id: 288, name: "Huyện Kỳ Anh", province: 25 },
    { id: 289, name: "Huyện Vũ Quang", province: 25 },
    { id: 729, name: "Huyện Lộc Hà", province: 25 },
    { id: 755, name: "Thị xã Kỳ Anh", province: 25 },
    { id: 290, name: "Thành phố Hải Dương", province: 26 },
    { id: 291, name: "Thị xã Chí Linh", province: 26 },
    { id: 292, name: "Huyện Nam Sách", province: 26 },
    { id: 293, name: "Huyện Kinh Môn", province: 26 },
    { id: 294, name: "Huyện Gia Lộc", province: 26 },
    { id: 295, name: "Huyện Tứ Kỳ", province: 26 },
    { id: 296, name: "Huyện Thanh Miện", province: 26 },
    { id: 297, name: "Huyện Ninh Giang", province: 26 },
    { id: 298, name: "Huyện Cẩm Giàng", province: 26 },
    { id: 299, name: "Huyện Thanh Hà", province: 26 },
    { id: 300, name: "Huyện Kim Thành", province: 26 },
    { id: 301, name: "Huyện Bình Giang", province: 26 },
    { id: 52, name: "Quận Hồng Bàng", province: 27 },
    { id: 53, name: "Quận Lê Chân", province: 27 },
    { id: 54, name: "Quận Ngô Quyền", province: 27 },
    { id: 55, name: "Quận Kiến An", province: 27 },
    { id: 56, name: "Quận Hải An", province: 27 },
    { id: 57, name: "Quận Đồ Sơn", province: 27 },
    { id: 58, name: "Huyện An Lão", province: 27 },
    { id: 59, name: "Huyện Kiến Thụy", province: 27 },
    { id: 60, name: "Huyện Thủy Nguyên", province: 27 },
    { id: 61, name: "Huyện An Dương", province: 27 },
    { id: 62, name: "Huyện Tiên Lãng", province: 27 },
    { id: 63, name: "Huyện Vĩnh Bảo", province: 27 },
    { id: 64, name: "Huyện Cát Hải", province: 27 },
    { id: 65, name: "Huyện Bạch Long Vĩ", province: 27 },
    { id: 730, name: "Quận Dương Kinh", province: 27 },
    { id: 313, name: "Thành phố Hòa Bình", province: 28 },
    { id: 314, name: "Huyện Đà Bắc", province: 28 },
    { id: 315, name: "Huyện Mai Châu", province: 28 },
    { id: 316, name: "Huyện Tân Lạc", province: 28 },
    { id: 317, name: "Huyện Lạc Sơn", province: 28 },
    { id: 318, name: "Huyện Kỳ Sơn", province: 28 },
    { id: 319, name: "Huyện Lương Sơn", province: 28 },
    { id: 340, name: "Huyện Kim Bôi", province: 28 },
    { id: 341, name: "Huyện Lạc Thủy", province: 28 },
    { id: 342, name: "Huyện Yên Thủy", province: 28 },
    { id: 343, name: "Huyện Cao Phong", province: 28 },
    { id: 354, name: "Thành phố Nha Trang", province: 30 },
    { id: 355, name: "Huyện Vạn Ninh", province: 30 },
    { id: 356, name: "Huyện Ninh Hòa", province: 30 },
    { id: 357, name: "Huyện Diên Khánh", province: 30 },
    { id: 358, name: "Huyện Khánh Vĩnh", province: 30 },
    { id: 359, name: "Thành phố Cam Ranh", province: 30 },
    { id: 360, name: "Huyện Khánh Sơn", province: 30 },
    { id: 731, name: "Huyện Cam Lâm", province: 30 },
    { id: 384, name: "Thành phố Lai Châu", province: 32 },
    { id: 385, name: "Huyện Tam Đường", province: 32 },
    { id: 386, name: "Huyện Phong Thổ", province: 32 },
    { id: 387, name: "Huyện Sìn Hồ", province: 32 },
    { id: 388, name: "Huyện Mường Tè", province: 32 },
    { id: 389, name: "Huyện Than Uyên", province: 32 },
    { id: 714, name: "Huyện Tân Uyên", province: 32 },
    { id: 715, name: "Huyện Nậm Nhùn", province: 32 },
    { id: 399, name: "Thành phố Đà Lạt", province: 33 },
    { id: 400, name: "Thành phố Bảo Lộc", province: 33 },
    { id: 401, name: "Huyện Đức Trọng", province: 33 },
    { id: 402, name: "Huyện Di Linh", province: 33 },
    { id: 403, name: "Huyện Đơn Dương", province: 33 },
    { id: 404, name: "Huyện Lạc Dương", province: 33 },
    { id: 405, name: "Huyện Đạ Huoai", province: 33 },
    { id: 406, name: "Huyện Đạ Tẻh", province: 33 },
    { id: 407, name: "Huyện Cát Tiên", province: 33 },
    { id: 408, name: "Huyện Lâm Hà", province: 33 },
    { id: 409, name: "Huyện Bảo lâm", province: 33 },
    { id: 410, name: "Huyện Đam Rông", province: 33 },
    { id: 411, name: "Thành phố Lạng Sơn", province: 34 },
    { id: 412, name: "Huyện Tràng Định", province: 34 },
    { id: 413, name: "Huyện Bình Gia", province: 34 },
    { id: 414, name: "Huyện Văn Lãng", province: 34 },
    { id: 415, name: "Huyện Bắc Sơn", province: 34 },
    { id: 416, name: "Huyện Văn Quan", province: 34 },
    { id: 417, name: "Huyện Cao Lộc", province: 34 },
    { id: 418, name: "Huyện Lộc Bình", province: 34 },
    { id: 419, name: "Huyện Chi Lăng", province: 34 },
    { id: 420, name: "Huyện Đình Lập", province: 34 },
    { id: 421, name: "Huyện Hữu Lũng", province: 34 },
    { id: 390, name: "Thành phố Lào Cai", province: 35 },
    { id: 391, name: "Huyện Si Ma Cai", province: 35 },
    { id: 392, name: "Huyện Bát Xát", province: 35 },
    { id: 393, name: "Huyện Bảo Thắng", province: 35 },
    { id: 394, name: "Huyện Sa Pa", province: 35 },
    { id: 395, name: "Huyện Văn Bàn", province: 35 },
    { id: 396, name: "Huyện Bảo Yên", province: 35 },
    { id: 397, name: "Huyện Bắc Hà", province: 35 },
    { id: 398, name: "Huyện Mường Khương", province: 35 },
    { id: 422, name: "Thành phố Tân An", province: 36 },
    { id: 423, name: "Huyện Vĩnh Hưng", province: 36 },
    { id: 424, name: "Huyện Mộc Hóa", province: 36 },
    { id: 425, name: "Huyện Tân Thạnh", province: 36 },
    { id: 426, name: "Huyện Thạnh Hóa", province: 36 },
    { id: 427, name: "Huyện Đức Huệ", province: 36 },
    { id: 428, name: "Huyện Đức Hòa", province: 36 },
    { id: 429, name: "Huyện Bến Lức", province: 36 },
    { id: 430, name: "Huyện Thủ Thừa", province: 36 },
    { id: 431, name: "Huyện Châu Thành", province: 36 },
    { id: 432, name: "Huyện Tân Trụ", province: 36 },
    { id: 433, name: "Huyện Cần Đước", province: 36 },
    { id: 434, name: "Huyện Cần Giuộc", province: 36 },
    { id: 435, name: "Huyện Tân Hưng", province: 36 },
    { id: 748, name: "Thị xã Kiến Tường", province: 36 },
    { id: 454, name: "Thành phố Nam Định", province: 37 },
    { id: 455, name: "Huyện Mỹ Lộc", province: 37 },
    { id: 456, name: "Huyện Xuân Trường", province: 37 },
    { id: 457, name: "Huyện Giao Thủy", province: 37 },
    { id: 458, name: "Huyện Ý Yên", province: 37 },
    { id: 459, name: "Huyện Vụ Bản", province: 37 },
    { id: 460, name: "Huyện Nam Trực", province: 37 },
    { id: 461, name: "Huyện Trực Ninh", province: 37 },
    { id: 462, name: "Huyện Nghĩa Hưng", province: 37 },
    { id: 463, name: "Huyện Hải Hậu", province: 37 },
    { id: 464, name: "Thành phố Vinh", province: 38 },
    { id: 465, name: "Thị xã Cửa Lò", province: 38 },
    { id: 466, name: "Huyện Quỳ Châu", province: 38 },
    { id: 467, name: "Huyện Quỳ Hợp", province: 38 },
    { id: 468, name: "Huyện Nghĩa Đàn", province: 38 },
    { id: 469, name: "Huyện Quỳnh Lưu", province: 38 },
    { id: 470, name: "Huyện Kỳ Sơn", province: 38 },
    { id: 471, name: "Huyện Tương Dương", province: 38 },
    { id: 472, name: "Huyện Con Cuông", province: 38 },
    { id: 473, name: "Huyện Tân Kỳ", province: 38 },
    { id: 474, name: "Huyện Yên Thành", province: 38 },
    { id: 475, name: "Huyện Diễn Châu", province: 38 },
    { id: 476, name: "Huyện Anh Sơn", province: 38 },
    { id: 477, name: "Huyện Đô Lương", province: 38 },
    { id: 478, name: "Huyện Thanh Chương", province: 38 },
    { id: 479, name: "Huyện Nghi Lộc", province: 38 },
    { id: 480, name: "Huyện Nam Đàn", province: 38 },
    { id: 481, name: "Huyện Hưng Nguyên", province: 38 },
    { id: 482, name: "Huyện Quế Phong", province: 38 },
    { id: 736, name: "Thị xã Thái Hoà", province: 38 },
    { id: 747, name: "Thị xã Hoàng Mai", province: 38 },
    { id: 483, name: "Thành phố Phan Rang-Tháp Chàm", province: 39 },
    { id: 484, name: "Huyện Ninh Sơn", province: 39 },
    { id: 485, name: "Huyện Ninh Hải", province: 39 },
    { id: 486, name: "Huyện Ninh Phước", province: 39 },
    { id: 487, name: "Huyện Bác Ái", province: 39 },
    { id: 488, name: "Huyện Thuận Bắc", province: 39 },
    { id: 738, name: "Huyện Thuận Nam", province: 39 },
    { id: 232, name: "Thành phố Việt Trì", province: 40 },
    { id: 233, name: "Thị xã Phú Thọ", province: 40 },
    { id: 234, name: "Huyện Đoan Hùng", province: 40 },
    { id: 235, name: "Huyện Thanh Ba", province: 40 },
    { id: 236, name: "Huyện Hạ Hòa", province: 40 },
    { id: 237, name: "Huyện Cẩm Khê", province: 40 },
    { id: 238, name: "Huyện Yên Lập", province: 40 },
    { id: 239, name: "Huyện Thanh Sơn", province: 40 },
    { id: 240, name: "Huyện Phù Ninh", province: 40 },
    { id: 241, name: "Huyện Lâm Thao", province: 40 },
    { id: 242, name: "Huyện Tam Nông", province: 40 },
    { id: 243, name: "Huyện Thanh Thủy", province: 40 },
    { id: 734, name: "Huyện Tân Sơn", province: 40 },
    { id: 503, name: "Thành phố Tuy Hòa", province: 41 },
    { id: 504, name: "Huyện Đồng Xuân", province: 41 },
    { id: 505, name: "Thị Xã Sông Cầu", province: 41 },
    { id: 506, name: "Huyện Tuy An", province: 41 },
    { id: 507, name: "Huyện Sơn Hòa", province: 41 },
    { id: 508, name: "Huyện Song Hinh", province: 41 },
    { id: 509, name: "Huyện Đông Hòa", province: 41 },
    { id: 510, name: "Huyện Phú Hòa", province: 41 },
    { id: 511, name: "Huyện Tây Hòa", province: 41 },
    { id: 512, name: "Thành phố Đồng Hới", province: 42 },
    { id: 513, name: "Huyện Tuyên Hóa", province: 42 },
    { id: 514, name: "Huyện Minh Hóa", province: 42 },
    { id: 515, name: "Huyện Quảng Trạch", province: 42 },
    { id: 516, name: "Huyện Bố Trạch", province: 42 },
    { id: 517, name: "Huyện Quảng Ninh", province: 42 },
    { id: 518, name: "Huyện Lệ Thủy", province: 42 },
    { id: 750, name: "Thị xã Ba Đồn", province: 42 },
    { id: 519, name: "Thành phố Tam Kỳ", province: 43 },
    { id: 520, name: "Thành phố Hội An", province: 43 },
    { id: 521, name: "Huyện Duy Xuyên", province: 43 },
    { id: 522, name: "Huyện Điện Bàn", province: 43 },
    { id: 523, name: "Huyện Đại Lộc", province: 43 },
    { id: 524, name: "Huyện Quế Sơn", province: 43 },
    { id: 525, name: "Huyện Hiệp Đức", province: 43 },
    { id: 526, name: "Huyện Thăng Bình", province: 43 },
    { id: 527, name: "Huyện Núi Thành", province: 43 },
    { id: 528, name: "Huyện Tiên Phước", province: 43 },
    { id: 529, name: "Huyện Bắc Trà My", province: 43 },
    { id: 530, name: "Huyện Đông Giang", province: 43 },
    { id: 531, name: "Huyện Nam Giang", province: 43 },
    { id: 532, name: "Huyện Phước Sơn", province: 43 },
    { id: 533, name: "Huyện Nam Trà My", province: 43 },
    { id: 534, name: "Huyện Tây Giang", province: 43 },
    { id: 535, name: "Huyện Phú Ninh", province: 43 },
    { id: 737, name: "Huyện Nông Sơn", province: 43 },
    { id: 536, name: "Thành phố Quảng Ngãi", province: 44 },
    { id: 537, name: "Huyện Lý Sơn", province: 44 },
    { id: 538, name: "Huyện Bình Sơn", province: 44 },
    { id: 539, name: "Huyện Trà Bồng", province: 44 },
    { id: 540, name: "Huyện Sơn Tịnh", province: 44 },
    { id: 541, name: "Huyện Sơn Hà", province: 44 },
    { id: 542, name: "Huyện Tư Nghĩa", province: 44 },
    { id: 543, name: "Huyện Nghĩa Hành", province: 44 },
    { id: 544, name: "Huyện Minh Long", province: 44 },
    { id: 545, name: "Huyện Mộ Đức", province: 44 },
    { id: 546, name: "Huyện Đức Phổ", province: 44 },
    { id: 547, name: "Huyện Ba Tơ", province: 44 },
    { id: 548, name: "Huyện Sơn Tây", province: 44 },
    { id: 549, name: "Huyện Tây Trà", province: 44 },
    { id: 489, name: "Thành phố Hạ Long", province: 45 },
    { id: 490, name: "Thành phố Cẩm Phả", province: 45 },
    { id: 491, name: "Thành phố Uông Bí", province: 45 },
    { id: 492, name: "Thành phố Móng Cái", province: 45 },
    { id: 493, name: "Huyện Bình Liêu", province: 45 },
    { id: 494, name: "Huyện Đầm Hà", province: 45 },
    { id: 495, name: "Huyện Hải Hà", province: 45 },
    { id: 496, name: "Huyện Tiên Yên", province: 45 },
    { id: 497, name: "Huyện Ba Chế", province: 45 },
    { id: 498, name: "Huyện Đông Triều", province: 45 },
    { id: 499, name: "Thị xã Quảng Yên", province: 45 },
    { id: 500, name: "Huyện Hoành Bồ", province: 45 },
    { id: 501, name: "Huyện Vân Đồn", province: 45 },
    { id: 502, name: "Huyện Cô Tô", province: 45 },
    { id: 561, name: "Thành phố Đông Hà", province: 46 },
    { id: 562, name: "Thị xã Quảng Trị", province: 46 },
    { id: 563, name: "Huyện Vĩnh Linh", province: 46 },
    { id: 564, name: "Huyện Gio Linh", province: 46 },
    { id: 565, name: "Huyện Cam Lộ", province: 46 },
    { id: 566, name: "Huyện Triệu Phong", province: 46 },
    { id: 567, name: "Huyện Hải Lăng", province: 46 },
    { id: 568, name: "Huyện Hướng Hóa", province: 46 },
    { id: 569, name: "Huyện Đa Krông", province: 46 },
    { id: 570, name: "Huyện Cồn Cỏ", province: 46 },
    { id: 571, name: "Thành phố Sóc Trăng", province: 47 },
    { id: 572, name: "Huyện Kế Sách", province: 47 },
    { id: 573, name: "Huyện Mỹ Tú", province: 47 },
    { id: 574, name: "Huyện Mỹ Xuyên", province: 47 },
    { id: 575, name: "Huyện Thạnh Trị", province: 47 },
    { id: 576, name: "Huyện Long Phú", province: 47 },
    { id: 577, name: "Thị xã Vĩnh Châu", province: 47 },
    { id: 578, name: "Huyện Cù Lao Dung", province: 47 },
    { id: 741, name: "Huyện Châu Thành", province: 47 },
    { id: 742, name: "Thị xã Ngã Năm", province: 47 },
    { id: 743, name: "Huyện Trần Đề", province: 47 },
    { id: 591, name: "Thành phố Tây Ninh", province: 48 },
    { id: 592, name: "Huyện Tân Biên", province: 48 },
    { id: 593, name: "Huyện Tân Châu", province: 48 },
    { id: 594, name: "Huyện Dương Minh Châu", province: 48 },
    { id: 595, name: "Huyện Châu Thành", province: 48 },
    { id: 596, name: "Huyện Hòa Thành", province: 48 },
    { id: 597, name: "Huyện Bến Cầu", province: 48 },
    { id: 598, name: "Huyện Gò Dầu", province: 48 },
    { id: 599, name: "Huyện Trảng Bàng", province: 48 },
    { id: 627, name: "Thành phố Thái Bình", province: 49 },
    { id: 628, name: "Huyện Quỳnh Phụ", province: 49 },
    { id: 629, name: "Huyện Hưng Hà", province: 49 },
    { id: 630, name: "Huyện Đông Hưng", province: 49 },
    { id: 631, name: "Huyện Vũ Thư", province: 49 },
    { id: 632, name: "Huyện Kiến Xương", province: 49 },
    { id: 633, name: "Huyện Tiền Hải", province: 49 },
    { id: 634, name: "Huyện Thái Thụy", province: 49 },
    { id: 635, name: "Thành phố Thái Nguyên", province: 50 },
    { id: 636, name: "Thành phố Sông Công", province: 50 },
    { id: 637, name: "Huyện Định Hóa", province: 50 },
    { id: 638, name: "Huyện Phú Lương", province: 50 },
    { id: 639, name: "Huyện Võ Nhai", province: 50 },
    { id: 640, name: "Huyện Đại Từ", province: 50 },
    { id: 641, name: "Huyện Đồng Hỷ", province: 50 },
    { id: 642, name: "Huyện Phú Bình", province: 50 },
    { id: 643, name: "Thị Xã Phổ Yên", province: 50 },
    { id: 600, name: "Thành phố Thanh Hóa", province: 51 },
    { id: 601, name: "Thị xã Bỉm Sơn", province: 51 },
    { id: 602, name: "Thị xã Sầm Sơn", province: 51 },
    { id: 603, name: "Huyện Quan Hóa", province: 51 },
    { id: 604, name: "Huyện Quan Sơn", province: 51 },
    { id: 605, name: "Huyện Mường Lát", province: 51 },
    { id: 606, name: "Huyện Bá Thước", province: 51 },
    { id: 607, name: "Huyện Thường Xuân", province: 51 },
    { id: 608, name: "Huyện Như Xuân", province: 51 },
    { id: 609, name: "Huyện Như Thanh", province: 51 },
    { id: 610, name: "Huyện Lang Chánh", province: 51 },
    { id: 611, name: "Huyện Ngọc Lặc", province: 51 },
    { id: 612, name: "Huyện Thạch Thành", province: 51 },
    { id: 613, name: "Huyện Cẩm Thủy", province: 51 },
    { id: 614, name: "Huyện Thọ Xuân", province: 51 },
    { id: 615, name: "Huyện Vĩnh Lộc", province: 51 },
    { id: 616, name: "Huyện Thiệu Hóa", province: 51 },
    { id: 617, name: "Huyện Triệu Sơn", province: 51 },
    { id: 618, name: "Huyện Nông Cống", province: 51 },
    { id: 619, name: "Huyện Hà Trung", province: 51 },
    { id: 620, name: "Huyện Hoằng Hóa", province: 51 },
    { id: 621, name: "Huyện Nga Sơn", province: 51 },
    { id: 622, name: "Huyện Hậu Lộc", province: 51 },
    { id: 623, name: "Huyện Tĩnh Gia", province: 51 },
    { id: 624, name: "Huyện Yên Định", province: 51 },
    { id: 625, name: "Huyện Quảng Xương", province: 51 },
    { id: 626, name: "Huyện Đông Sơn", province: 51 },
    { id: 644, name: "Thành phố Huế", province: 52 },
    { id: 645, name: "Huyện Phong Điền", province: 52 },
    { id: 646, name: "Huyện Quảng Điền", province: 52 },
    { id: 647, name: "Thị xã Hương Trà", province: 52 },
    { id: 648, name: "Huyện Phú Vang", province: 52 },
    { id: 649, name: "Thị xã Hương Thủy", province: 52 },
    { id: 650, name: "Huyện Phú Lộc", province: 52 },
    { id: 651, name: "Huyện Nam Đông", province: 52 },
    { id: 652, name: "Huyện A Lưới", province: 52 },
    { id: 653, name: "Thành phố Mỹ Tho", province: 53 },
    { id: 654, name: "Thị xã Gò Công", province: 53 },
    { id: 655, name: "Huyện Cái Bè", province: 53 },
    { id: 656, name: "Huyện Cai Lậy", province: 53 },
    { id: 657, name: "Huyện Châu Thành", province: 53 },
    { id: 658, name: "Huyện Chợ Gạo", province: 53 },
    { id: 659, name: "Huyện Gò Công Đông", province: 53 },
    { id: 660, name: "Huyện Gò Công Tây", province: 53 },
    { id: 661, name: "Huyện Tân Phước", province: 53 },
    { id: 720, name: "Huyện Tân Phú Đông", province: 53 },
    { id: 753, name: "Thị xã Cai Lậy", province: 53 },
    { id: 662, name: "Thành phố Trà Vinh", province: 54 },
    { id: 663, name: "Huyện Càng Long", province: 54 },
    { id: 664, name: "Huyện Cầu Kè", province: 54 },
    { id: 665, name: "Huyện Tiểu Cần", province: 54 },
    { id: 666, name: "Huyện Châu Thành", province: 54 },
    { id: 667, name: "Huyện Trà Cú", province: 54 },
    { id: 668, name: "Huyện Cầu Ngang", province: 54 },
    { id: 669, name: "Huyện Duyên Hải", province: 54 },
    { id: 759, name: "Thị xã Duyên Hải", province: 54 },
    { id: 670, name: "Thành phố Tuyên Quang", province: 55 },
    { id: 671, name: "Huyện Nà Hang", province: 55 },
    { id: 672, name: "Huyện Chiêm Hóa", province: 55 },
    { id: 673, name: "Huyện Hàm Yên", province: 55 },
    { id: 674, name: "Huyện Yên Sơn", province: 55 },
    { id: 675, name: "Huyện Sơn Dương", province: 55 },
    { id: 744, name: "Huyện Lâm Bình", province: 55 },
    { id: 362, name: "Thành phố Rạch Giá", province: 56 },
    { id: 363, name: "Thị xã Hà Tiên", province: 56 },
    { id: 364, name: "Huyện Kiên Lương", province: 56 },
    { id: 365, name: "Huyện Hòn Đất", province: 56 },
    { id: 366, name: "Huyện Tân Hiệp", province: 56 },
    { id: 367, name: "Huyện Châu Thành", province: 56 },
    { id: 368, name: "Huyện Giồng Riềng", province: 56 },
    { id: 369, name: "Huyện Gò Quao", province: 56 },
    { id: 370, name: "Huyện An Biên", province: 56 },
    { id: 371, name: "Huyện An Minh", province: 56 },
    { id: 372, name: "Huyện Vĩnh Thuận", province: 56 },
    { id: 373, name: "Huyện Phú Quốc", province: 56 },
    { id: 374, name: "Huyện Kiên Hải", province: 56 },
    { id: 732, name: "Huyện U Minh Thượng", province: 56 },
    { id: 733, name: "Huyện Giang Thành", province: 56 },
    { id: 685, name: "Thành phố Vĩnh Yên", province: 57 },
    { id: 686, name: "Huyện Tam Dương", province: 57 },
    { id: 687, name: "Huyện Lập Thạch", province: 57 },
    { id: 688, name: "Huyện Vĩnh Tường", province: 57 },
    { id: 689, name: "Huyện Yên Lạc", province: 57 },
    { id: 690, name: "Huyện Bình Xuyên", province: 57 },
    { id: 692, name: "Thị xã Phúc Yên", province: 57 },
    { id: 693, name: "Huyện Tam Đảo", province: 57 },
    { id: 735, name: "Huyện Sông Lô", province: 57 },
    { id: 77, name: "Thành phố Vũng Tàu", province: 58 },
    { id: 78, name: "Thành phố Bà Rịa", province: 58 },
    { id: 79, name: "Huyện Xuyên Mộc", province: 58 },
    { id: 80, name: "Huyện Long Điền", province: 58 },
    { id: 82, name: "Huyện Tân Thành", province: 58 },
    { id: 83, name: "Huyện Châu Đức", province: 58 },
    { id: 84, name: "Huyện Đất Đỏ", province: 58 },
    { id: 754, name: "Huyện Côn Đảo", province: 58 },
    { id: 676, name: "Thành phố Yên Bái", province: 59 },
    { id: 677, name: "Thị xã Nghĩa Lộ", province: 59 },
    { id: 678, name: "Huyện Văn Yên", province: 59 },
    { id: 679, name: "Huyện Yên Bình", province: 59 },
    { id: 680, name: "Huyện Mù Cang Chải", province: 59 },
    { id: 681, name: "Huyện Văn Chấn", province: 59 },
    { id: 682, name: "Huyện Trấn Yên", province: 59 },
    { id: 683, name: "Huyện Trạm Tấu", province: 59 },
    { id: 684, name: "Huyện Lục Yên", province: 59 },
    { id: 35, name: "Thành phố Vĩnh Long", province: 60 },
    { id: 36, name: "Huyện Long Hồ", province: 60 },
    { id: 37, name: "Huyện Mang Thít", province: 60 },
    { id: 38, name: "Thị xã Bình Minh", province: 60 },
    { id: 39, name: "Huyện Trà Ôn", province: 60 },
    { id: 40, name: "Huyện Tam Bình", province: 60 },
    { id: 41, name: "Huyện Vũng Liêm", province: 60 },
    { id: 739, name: "Huyện Bình Tân", province: 60 },
    { id: 85, name: "Thành phố Thủ Dầu Một", province: 61 },
    { id: 86, name: "Huyện Bàu Bàng", province: 61 },
    { id: 87, name: "Huyện Bắc Tân Uyên", province: 61 },
    { id: 88, name: "Thị xã Thuận An", province: 61 },
    { id: 89, name: "Thị xã Dĩ An", province: 61 },
    { id: 90, name: "Huyện Phú Giáo", province: 61 },
    { id: 91, name: "Huyện Dầu Tiếng", province: 61 },
    { id: 751, name: "Thị xã Bến Cát", province: 61 },
    { id: 752, name: "Thị xã Tân Uyên", province: 61 },
    { id: 204, name: "Thị xã Gia Nghĩa", province: 62 },
    { id: 205, name: "Huyện Đắk Song", province: 62 },
    { id: 206, name: "Huyện Cư Jút", province: 62 },
    { id: 207, name: "Huyện Krông Nô", province: 62 },
    { id: 208, name: "Huyện Đắk Glong", province: 62 },
    { id: 209, name: "Huyện Đắk Mil", province: 62 },
    { id: 210, name: "Huyện Đắk R'lấp", province: 62 },
    { id: 718, name: "Huyện Tuy Đức", province: 62 },
    { id: 211, name: "Thành phố Sa Đéc", province: 63 },
    { id: 212, name: "Thành phố Cao Lãnh", province: 63 },
    { id: 213, name: "Huyện Tân Hồng", province: 63 },
    { id: 214, name: "Huyện Hồng Ngự", province: 63 },
    { id: 215, name: "Huyện Tam Nông", province: 63 },
    { id: 216, name: "Huyện Thanh Bình", province: 63 },
    { id: 217, name: "Huyện Cao Lãnh", province: 63 },
    { id: 218, name: "Huyện Lấp Vò", province: 63 },
    { id: 219, name: "Huyện Tháp Mười", province: 63 },
    { id: 230, name: "Huyện Lai Vung", province: 63 },
    { id: 231, name: "Huyện Châu Thành", province: 63 },
    { id: 740, name: "Thị xã Hồng Ngự", province: 63 },
    { id: 344, name: "Thành phố Hưng Yên", province: 64 },
    { id: 345, name: "Huyện Kim Động", province: 64 },
    { id: 346, name: "Huyện Ân Thi", province: 64 },
    { id: 347, name: "Huyện Khoái Châu", province: 64 },
    { id: 348, name: "Huyện Yên Mỹ", province: 64 },
    { id: 349, name: "Huyện Tiên Lữ", province: 64 },
    { id: 350, name: "Huyện Phù Cừ", province: 64 },
    { id: 351, name: "Huyện Mỹ Hào", province: 64 },
    { id: 352, name: "Huyện Văn Lâm", province: 64 },
    { id: 353, name: "Huyện Văn Giang", province: 64 },
    { id: 375, name: "Thành phố Kon Tum", province: 65 },
    { id: 376, name: "Huyện Đắk Glei", province: 65 },
    { id: 377, name: "Huyện Ngọc Hồi", province: 65 },
    { id: 378, name: "Huyện Đắk Tô", province: 65 },
    { id: 379, name: "Huyện Sa Thầy", province: 65 },
    { id: 380, name: "Huyện Kon Plông", province: 65 },
    { id: 381, name: "Huyện Đắk Hà", province: 65 },
    { id: 382, name: "Huyện Kon Rẫy", province: 65 },
    { id: 383, name: "Huyện Tu Mơ Rông", province: 65 },
    { id: 436, name: "Thành phố Ninh Bình", province: 66 },
    { id: 437, name: "Thị xã Tam Điệp", province: 66 },
    { id: 438, name: "Huyện Nho Quan", province: 66 },
    { id: 439, name: "Huyện Gia Viễn", province: 66 },
    { id: 450, name: "Huyện Hoa Lư", province: 66 },
    { id: 451, name: "Huyện Yên Mô", province: 66 },
    { id: 452, name: "Huyện Kim Sơn", province: 66 },
    { id: 453, name: "Huyện Yên Khánh", province: 66 },
    { id: 580, name: "Thành phố Sơn La", province: 67 },
    { id: 581, name: "Huyện Quỳnh Nhai", province: 67 },
    { id: 582, name: "Huyện Mường La", province: 67 },
    { id: 583, name: "Huyện Thuận Châu", province: 67 },
    { id: 584, name: "Huyện Bắc Yên", province: 67 },
    { id: 585, name: "Huyện Phù Yên", province: 67 },
    { id: 586, name: "Huyện Mai Sơn", province: 67 },
    { id: 587, name: "Huyện Yên Châu", province: 67 },
    { id: 588, name: "Huyện Sông Mã", province: 67 },
    { id: 589, name: "Huyện Mộc Châu", province: 67 },
    { id: 590, name: "Huyện Sốp Cộp", province: 67 },
    { id: 746, name: "Huyện Vân Hồ", province: 67 }
];
exports.LIST_DISTRICT = LIST_DISTRICT;
const LIST_WARD = [
    {
        id: 26734, name: "Phường Tân Định", province: 1, district: 1
    },
    {
        id: 26737, name: "Phường Đa Kao", province: 1, district: 1
    },
    {
        id: 26740, name: "Phường Bến Nghé", province: 1, district: 1
    },
    {
        id: 26743, name: "Phường Bến Thành", province: 1, district: 1
    },
    {
        id: 26746, name: "Phường Nguyễn Thái Bình", province: 1, district: 1
    },
    {
        id: 26749, name: "Phường Phạm Ngũ Lão", province: 1, district: 1
    },
    {
        id: 26752, name: "Phường Cầu Ông Lãnh", province: 1, district: 1
    },
    {
        id: 26755, name: "Phường Cô Giang", province: 1, district: 1
    },
    {
        id: 26758, name: "Phường Nguyễn Cư Trinh", province: 1, district: 1
    },
    {
        id: 26761, name: "Phường Cầu Kho", province: 1, district: 1
    },
    {
        id: 27088, name: "Phường Thảo Điền", province: 1, district: 2
    },
    {
        id: 27091, name: "Phường An Phú", province: 1, district: 2
    },
    {
        id: 27094, name: "Phường Bình An", province: 1, district: 2
    },
    {
        id: 27097, name: "Phường Bình Trưng Đông", province: 1, district: 2
    },
    {
        id: 27100, name: "Phường Bình Trưng Tây", province: 1, district: 2
    },
    {
        id: 27103, name: "Phường Bình Khánh", province: 1, district: 2
    },
    {
        id: 27106, name: "Phường An Khánh", province: 1, district: 2
    },
    {
        id: 27109, name: "Phường Cát Lái", province: 1, district: 2
    },
    {
        id: 27112, name: "Phường Thạnh Mỹ Lợi", province: 1, district: 2
    },
    {
        id: 27115, name: "Phường An Lợi Đông", province: 1, district: 2
    },
    {
        id: 27118, name: "Phường Thủ Thiêm", province: 1, district: 2
    },
    {
        id: 27121, name: "Phường 08", province: 1, district: 3
    },
    {
        id: 27124, name: "Phường 07", province: 1, district: 3
    },
    {
        id: 27127, name: "Phường 14", province: 1, district: 3
    },
    {
        id: 27130, name: "Phường 12", province: 1, district: 3
    },
    {
        id: 27133, name: "Phường 11", province: 1, district: 3
    },
    {
        id: 27136, name: "Phường 13", province: 1, district: 3
    },
    {
        id: 27139, name: "Phường 06", province: 1, district: 3
    },
    {
        id: 27142, name: "Phường 09", province: 1, district: 3
    },
    {
        id: 27145, name: "Phường 10", province: 1, district: 3
    },
    {
        id: 27148, name: "Phường 04", province: 1, district: 3
    },
    {
        id: 27151, name: "Phường 05", province: 1, district: 3
    },
    {
        id: 27154, name: "Phường 03", province: 1, district: 3
    },
    {
        id: 27157, name: "Phường 02", province: 1, district: 3
    },
    {
        id: 27160, name: "Phường 01", province: 1, district: 3
    },
    {
        id: 27256, name: "Phường 12", province: 1, district: 4
    },
    {
        id: 27259, name: "Phường 13", province: 1, district: 4
    },
    {
        id: 27262, name: "Phường 09", province: 1, district: 4
    },
    {
        id: 27265, name: "Phường 06", province: 1, district: 4
    },
    {
        id: 27268, name: "Phường 08", province: 1, district: 4
    },
    {
        id: 27271, name: "Phường 10", province: 1, district: 4
    },
    {
        id: 27274, name: "Phường 05", province: 1, district: 4
    },
    {
        id: 27277, name: "Phường 18", province: 1, district: 4
    },
    {
        id: 27280, name: "Phường 14", province: 1, district: 4
    },
    {
        id: 27283, name: "Phường 04", province: 1, district: 4
    },
    {
        id: 27286, name: "Phường 03", province: 1, district: 4
    },
    {
        id: 27289, name: "Phường 16", province: 1, district: 4
    },
    {
        id: 27292, name: "Phường 02", province: 1, district: 4
    },
    {
        id: 27295, name: "Phường 15", province: 1, district: 4
    },
    {
        id: 27298, name: "Phường 01", province: 1, district: 4
    },
    {
        id: 27301, name: "Phường 04", province: 1, district: 5
    },
    {
        id: 27304, name: "Phường 09", province: 1, district: 5
    },
    {
        id: 27307, name: "Phường 03", province: 1, district: 5
    },
    {
        id: 27310, name: "Phường 12", province: 1, district: 5
    },
    {
        id: 27313, name: "Phường 02", province: 1, district: 5
    },
    {
        id: 27316, name: "Phường 08", province: 1, district: 5
    },
    {
        id: 27319, name: "Phường 15", province: 1, district: 5
    },
    {
        id: 27322, name: "Phường 07", province: 1, district: 5
    },
    {
        id: 27325, name: "Phường 01", province: 1, district: 5
    },
    {
        id: 27328, name: "Phường 11", province: 1, district: 5
    },
    {
        id: 27331, name: "Phường 14", province: 1, district: 5
    },
    {
        id: 27334, name: "Phường 05", province: 1, district: 5
    },
    {
        id: 27337, name: "Phường 06", province: 1, district: 5
    },
    {
        id: 27340, name: "Phường 10", province: 1, district: 5
    },
    {
        id: 27343, name: "Phường 13", province: 1, district: 5
    },
    {
        id: 27346, name: "Phường 14", province: 1, district: 6
    },
    {
        id: 27349, name: "Phường 13", province: 1, district: 6
    },
    {
        id: 27352, name: "Phường 09", province: 1, district: 6
    },
    {
        id: 27355, name: "Phường 06", province: 1, district: 6
    },
    {
        id: 27358, name: "Phường 12", province: 1, district: 6
    },
    {
        id: 27361, name: "Phường 05", province: 1, district: 6
    },
    {
        id: 27364, name: "Phường 11", province: 1, district: 6
    },
    {
        id: 27367, name: "Phường 02", province: 1, district: 6
    },
    {
        id: 27370, name: "Phường 01", province: 1, district: 6
    },
    {
        id: 27373, name: "Phường 04", province: 1, district: 6
    },
    {
        id: 27376, name: "Phường 08", province: 1, district: 6
    },
    {
        id: 27379, name: "Phường 03", province: 1, district: 6
    },
    {
        id: 27382, name: "Phường 07", province: 1, district: 6
    },
    {
        id: 27385, name: "Phường 10", province: 1, district: 6
    },
    {
        id: 27466, name: "Phường Tân Thuận Đông", province: 1, district: 7
    },
    {
        id: 27469, name: "Phường Tân Thuận Tây", province: 1, district: 7
    },
    {
        id: 27472, name: "Phường Tân Kiểng", province: 1, district: 7
    },
    {
        id: 27475, name: "Phường Tân Hưng", province: 1, district: 7
    },
    {
        id: 27478, name: "Phường Bình Thuận", province: 1, district: 7
    },
    {
        id: 27481, name: "Phường Tân Quy", province: 1, district: 7
    },
    {
        id: 27484, name: "Phường Phú Thuận", province: 1, district: 7
    },
    {
        id: 27487, name: "Phường Tân Phú", province: 1, district: 7
    },
    {
        id: 27490, name: "Phường Tân Phong", province: 1, district: 7
    },
    {
        id: 27493, name: "Phường Phú Mỹ", province: 1, district: 7
    },
    {
        id: 27388, name: "Phường 08", province: 1, district: 8
    },
    {
        id: 27391, name: "Phường 02", province: 1, district: 8
    },
    {
        id: 27394, name: "Phường 01", province: 1, district: 8
    },
    {
        id: 27397, name: "Phường 03", province: 1, district: 8
    },
    {
        id: 27400, name: "Phường 11", province: 1, district: 8
    },
    {
        id: 27403, name: "Phường 09", province: 1, district: 8
    },
    {
        id: 27406, name: "Phường 10", province: 1, district: 8
    },
    {
        id: 27409, name: "Phường 04", province: 1, district: 8
    },
    {
        id: 27412, name: "Phường 13", province: 1, district: 8
    },
    {
        id: 27415, name: "Phường 12", province: 1, district: 8
    },
    {
        id: 27418, name: "Phường 05", province: 1, district: 8
    },
    {
        id: 27421, name: "Phường 14", province: 1, district: 8
    },
    {
        id: 27424, name: "Phường 06", province: 1, district: 8
    },
    {
        id: 27427, name: "Phường 15", province: 1, district: 8
    },
    {
        id: 27430, name: "Phường 16", province: 1, district: 8
    },
    {
        id: 27433, name: "Phường 07", province: 1, district: 8
    },
    {
        id: 26830, name: "Phường Long Bình", province: 1, district: 9
    },
    {
        id: 26833, name: "Phường Long Thạnh Mỹ", province: 1, district: 9
    },
    {
        id: 26836, name: "Phường Tân Phú", province: 1, district: 9
    },
    {
        id: 26839, name: "Phường Hiệp Phú", province: 1, district: 9
    },
    {
        id: 26842, name: "Phường Tăng Nhơn Phú A", province: 1, district: 9
    },
    {
        id: 26845, name: "Phường Tăng Nhơn Phú B", province: 1, district: 9
    },
    {
        id: 26848, name: "Phường Phước Long B", province: 1, district: 9
    },
    {
        id: 26851, name: "Phường Phước Long A", province: 1, district: 9
    },
    {
        id: 26854, name: "Phường Trường Thạnh", province: 1, district: 9
    },
    {
        id: 26857, name: "Phường Long Phước", province: 1, district: 9
    },
    {
        id: 26860, name: "Phường Long Trường", province: 1, district: 9
    },
    {
        id: 26863, name: "Phường Phước Bình", province: 1, district: 9
    },
    {
        id: 26866, name: "Phường Phú Hữu", province: 1, district: 9
    },
    {
        id: 27163, name: "Phường 15", province: 1, district: 10
    },
    {
        id: 27166, name: "Phường 13", province: 1, district: 10
    },
    {
        id: 27169, name: "Phường 14", province: 1, district: 10
    },
    {
        id: 27172, name: "Phường 12", province: 1, district: 10
    },
    {
        id: 27175, name: "Phường 11", province: 1, district: 10
    },
    {
        id: 27178, name: "Phường 10", province: 1, district: 10
    },
    {
        id: 27181, name: "Phường 09", province: 1, district: 10
    },
    {
        id: 27184, name: "Phường 01", province: 1, district: 10
    },
    {
        id: 27187, name: "Phường 08", province: 1, district: 10
    },
    {
        id: 27190, name: "Phường 02", province: 1, district: 10
    },
    {
        id: 27193, name: "Phường 04", province: 1, district: 10
    },
    {
        id: 27196, name: "Phường 07", province: 1, district: 10
    },
    {
        id: 27199, name: "Phường 05", province: 1, district: 10
    },
    {
        id: 27202, name: "Phường 06", province: 1, district: 10
    },
    {
        id: 27205, name: "Phường 03", province: 1, district: 10
    },
    {
        id: 27208, name: "Phường 15", province: 1, district: 11
    },
    {
        id: 27211, name: "Phường 05", province: 1, district: 11
    },
    {
        id: 27214, name: "Phường 14", province: 1, district: 11
    },
    {
        id: 27217, name: "Phường 11", province: 1, district: 11
    },
    {
        id: 27220, name: "Phường 03", province: 1, district: 11
    },
    {
        id: 27223, name: "Phường 10", province: 1, district: 11
    },
    {
        id: 27226, name: "Phường 13", province: 1, district: 11
    },
    {
        id: 27229, name: "Phường 08", province: 1, district: 11
    },
    {
        id: 27232, name: "Phường 09", province: 1, district: 11
    },
    {
        id: 27235, name: "Phường 12", province: 1, district: 11
    },
    {
        id: 27238, name: "Phường 07", province: 1, district: 11
    },
    {
        id: 27241, name: "Phường 06", province: 1, district: 11
    },
    {
        id: 27244, name: "Phường 04", province: 1, district: 11
    },
    {
        id: 27247, name: "Phường 01", province: 1, district: 11
    },
    {
        id: 27250, name: "Phường 02", province: 1, district: 11
    },
    {
        id: 27253, name: "Phường 16", province: 1, district: 11
    },
    {
        id: 26764, name: "Phường Thạnh Xuân", province: 1, district: 12
    },
    {
        id: 26767, name: "Phường Thạnh Lộc", province: 1, district: 12
    },
    {
        id: 26770, name: "Phường Hiệp Thành", province: 1, district: 12
    },
    {
        id: 26773, name: "Phường Thới An", province: 1, district: 12
    },
    {
        id: 26776, name: "Phường Tân Chánh Hiệp", province: 1, district: 12
    },
    {
        id: 26779, name: "Phường An Phú Đông", province: 1, district: 12
    },
    {
        id: 26782, name: "Phường Tân Thới Hiệp", province: 1, district: 12
    },
    {
        id: 26785, name: "Phường Trung Mỹ Tây", province: 1, district: 12
    },
    {
        id: 26787, name: "Phường Tân Hưng Thuận", province: 1, district: 12
    },
    {
        id: 26788, name: "Phường Đông Hưng Thuận", province: 1, district: 12
    },
    {
        id: 26791, name: "Phường Tân Thới Nhất", province: 1, district: 12
    },
    {
        id: 27043, name: "Phường 04", province: 1, district: 13
    },
    {
        id: 27046, name: "Phường 05", province: 1, district: 13
    },
    {
        id: 27049, name: "Phường 09", province: 1, district: 13
    },
    {
        id: 27052, name: "Phường 07", province: 1, district: 13
    },
    {
        id: 27055, name: "Phường 03", province: 1, district: 13
    },
    {
        id: 27058, name: "Phường 01", province: 1, district: 13
    },
    {
        id: 27061, name: "Phường 02", province: 1, district: 13
    },
    {
        id: 27064, name: "Phường 08", province: 1, district: 13
    },
    {
        id: 27067, name: "Phường 15", province: 1, district: 13
    },
    {
        id: 27070, name: "Phường 10", province: 1, district: 13
    },
    {
        id: 27073, name: "Phường 11", province: 1, district: 13
    },
    {
        id: 27076, name: "Phường 17", province: 1, district: 13
    },
    {
        id: 27079, name: "Phường 14", province: 1, district: 13
    },
    {
        id: 27082, name: "Phường 12", province: 1, district: 13
    },
    {
        id: 27085, name: "Phường 13", province: 1, district: 13
    },
    {
        id: 26905, name: "Phường 13", province: 1, district: 14
    },
    {
        id: 26908, name: "Phường 11", province: 1, district: 14
    },
    {
        id: 26911, name: "Phường 27", province: 1, district: 14
    },
    {
        id: 26914, name: "Phường 26", province: 1, district: 14
    },
    {
        id: 26917, name: "Phường 12", province: 1, district: 14
    },
    {
        id: 26920, name: "Phường 25", province: 1, district: 14
    },
    {
        id: 26923, name: "Phường 05", province: 1, district: 14
    },
    {
        id: 26926, name: "Phường 07", province: 1, district: 14
    },
    {
        id: 26929, name: "Phường 24", province: 1, district: 14
    },
    {
        id: 26932, name: "Phường 06", province: 1, district: 14
    },
    {
        id: 26935, name: "Phường 14", province: 1, district: 14
    },
    {
        id: 26938, name: "Phường 15", province: 1, district: 14
    },
    {
        id: 26941, name: "Phường 02", province: 1, district: 14
    },
    {
        id: 26944, name: "Phường 01", province: 1, district: 14
    },
    {
        id: 26947, name: "Phường 03", province: 1, district: 14
    },
    {
        id: 26950, name: "Phường 17", province: 1, district: 14
    },
    {
        id: 26953, name: "Phường 21", province: 1, district: 14
    },
    {
        id: 26956, name: "Phường 22", province: 1, district: 14
    },
    {
        id: 26959, name: "Phường 19", province: 1, district: 14
    },
    {
        id: 26962, name: "Phường 28", province: 1, district: 14
    },
    {
        id: 26965, name: "Phường 02", province: 1, district: 15
    },
    {
        id: 26968, name: "Phường 04", province: 1, district: 15
    },
    {
        id: 26971, name: "Phường 12", province: 1, district: 15
    },
    {
        id: 26974, name: "Phường 13", province: 1, district: 15
    },
    {
        id: 26977, name: "Phường 01", province: 1, district: 15
    },
    {
        id: 26980, name: "Phường 03", province: 1, district: 15
    },
    {
        id: 26983, name: "Phường 11", province: 1, district: 15
    },
    {
        id: 26986, name: "Phường 07", province: 1, district: 15
    },
    {
        id: 26989, name: "Phường 05", province: 1, district: 15
    },
    {
        id: 26992, name: "Phường 10", province: 1, district: 15
    },
    {
        id: 26995, name: "Phường 06", province: 1, district: 15
    },
    {
        id: 26998, name: "Phường 08", province: 1, district: 15
    },
    {
        id: 27001, name: "Phường 09", province: 1, district: 15
    },
    {
        id: 27004, name: "Phường 14", province: 1, district: 15
    },
    {
        id: 27007, name: "Phường 15", province: 1, district: 15
    },
    {
        id: 27010, name: "Phường Tân Sơn Nhì", province: 1, district: 16
    },
    {
        id: 27013, name: "Phường Tây Thạnh", province: 1, district: 16
    },
    {
        id: 27016, name: "Phường Sơn Kỳ", province: 1, district: 16
    },
    {
        id: 27019, name: "Phường Tân Quý", province: 1, district: 16
    },
    {
        id: 27022, name: "Phường Tân Thành", province: 1, district: 16
    },
    {
        id: 27025, name: "Phường Phú Thọ Hoà", province: 1, district: 16
    },
    {
        id: 27028, name: "Phường Phú Thạnh", province: 1, district: 16
    },
    {
        id: 27031, name: "Phường Phú Trung", province: 1, district: 16
    },
    {
        id: 27034, name: "Phường Hoà Thạnh", province: 1, district: 16
    },
    {
        id: 27037, name: "Phường Hiệp Tân", province: 1, district: 16
    },
    {
        id: 27040, name: "Phường Tân Thới Hoà", province: 1, district: 16
    },
    {
        id: 26869, name: "Phường 15", province: 1, district: 17
    },
    {
        id: 26872, name: "Phường 13", province: 1, district: 17
    },
    {
        id: 26875, name: "Phường 17", province: 1, district: 17
    },
    {
        id: 26876, name: "Phường 06", province: 1, district: 17
    },
    {
        id: 26878, name: "Phường 16", province: 1, district: 17
    },
    {
        id: 26881, name: "Phường 12", province: 1, district: 17
    },
    {
        id: 26882, name: "Phường 14", province: 1, district: 17
    },
    {
        id: 26884, name: "Phường 10", province: 1, district: 17
    },
    {
        id: 26887, name: "Phường 05", province: 1, district: 17
    },
    {
        id: 26890, name: "Phường 07", province: 1, district: 17
    },
    {
        id: 26893, name: "Phường 04", province: 1, district: 17
    },
    {
        id: 26896, name: "Phường 01", province: 1, district: 17
    },
    {
        id: 26897, name: "Phường 09", province: 1, district: 17
    },
    {
        id: 26898, name: "Phường 08", province: 1, district: 17
    },
    {
        id: 26899, name: "Phường 11", province: 1, district: 17
    },
    {
        id: 26902, name: "Phường 03", province: 1, district: 17
    },
    {
        id: 26794, name: "Phường Linh Xuân", province: 1, district: 18
    },
    {
        id: 26797, name: "Phường Bình Chiểu", province: 1, district: 18
    },
    {
        id: 26800, name: "Phường Linh Trung", province: 1, district: 18
    },
    {
        id: 26803, name: "Phường Tam Bình", province: 1, district: 18
    },
    {
        id: 26806, name: "Phường Tam Phú", province: 1, district: 18
    },
    {
        id: 26809, name: "Phường Hiệp Bình Phước", province: 1, district: 18
    },
    {
        id: 26812, name: "Phường Hiệp Bình Chánh", province: 1, district: 18
    },
    {
        id: 26815, name: "Phường Linh Chiểu", province: 1, district: 18
    },
    {
        id: 26818, name: "Phường Linh Tây", province: 1, district: 18
    },
    {
        id: 26821, name: "Phường Linh Đông", province: 1, district: 18
    },
    {
        id: 26824, name: "Phường Bình Thọ", province: 1, district: 18
    },
    {
        id: 26827, name: "Phường Trường Thọ", province: 1, district: 18
    },
    {
        id: 27436, name: "Phường Bình Hưng Hòa", province: 1, district: 19
    },
    {
        id: 27439, name: "Phường Binh Hưng Hoà A", province: 1, district: 19
    },
    {
        id: 27442, name: "Phường Binh Hưng Hoà B", province: 1, district: 19
    },
    {
        id: 27445, name: "Phường Bình Trị Đông", province: 1, district: 19
    },
    {
        id: 27448, name: "Phường Bình Trị Đông A", province: 1, district: 19
    },
    {
        id: 27451, name: "Phường Bình Trị Đông B", province: 1, district: 19
    },
    {
        id: 27454, name: "Phường Tân Tạo", province: 1, district: 19
    },
    {
        id: 27457, name: "Phường Tân Tạo A", province: 1, district: 19
    },
    {
        id: 27460, name: "Phường An Lạc", province: 1, district: 19
    },
    {
        id: 27463, name: "Phường An Lạc A", province: 1, district: 19
    },
    {
        id: 27595, name: "Thị trấn Tân Túc", province: 1, district: 20
    },
    {
        id: 27598, name: "Xã Phạm Văn Hai", province: 1, district: 20
    },
    {
        id: 27601, name: "Xã Vĩnh Lộc A", province: 1, district: 20
    },
    {
        id: 27604, name: "Xã Vĩnh Lộc B", province: 1, district: 20
    },
    {
        id: 27607, name: "Xã Bình Lợi", province: 1, district: 20
    },
    {
        id: 27610, name: "Xã Lê Minh Xuân", province: 1, district: 20
    },
    {
        id: 27613, name: "Xã Tân Nhựt", province: 1, district: 20
    },
    {
        id: 27616, name: "Xã Tân Kiên", province: 1, district: 20
    },
    {
        id: 27619, name: "Xã Bình Hưng", province: 1, district: 20
    },
    {
        id: 27622, name: "Xã Phong Phú", province: 1, district: 20
    },
    {
        id: 27625, name: "Xã An Phú Tây", province: 1, district: 20
    },
    {
        id: 27628, name: "Xã Hưng Long", province: 1, district: 20
    },
    {
        id: 27631, name: "Xã Đa Phước", province: 1, district: 20
    },
    {
        id: 27634, name: "Xã Tân Quý Tây", province: 1, district: 20
    },
    {
        id: 27637, name: "Xã Bình Chánh", province: 1, district: 20
    },
    {
        id: 27640, name: "Xã Quy Đức", province: 1, district: 20
    },
    {
        id: 27559, name: "Thị trấn Hóc Môn", province: 1, district: 703
    },
    {
        id: 27562, name: "Xã Tân Hiệp", province: 1, district: 703
    },
    {
        id: 27565, name: "Xã Nhị Bình", province: 1, district: 703
    },
    {
        id: 27568, name: "Xã Đông Thạnh", province: 1, district: 703
    },
    {
        id: 27571, name: "Xã Tân Thới Nhì", province: 1, district: 703
    },
    {
        id: 27574, name: "Xã Thới Tam Thôn", province: 1, district: 703
    },
    {
        id: 27577, name: "Xã Xuân Thới Sơn", province: 1, district: 703
    },
    {
        id: 27580, name: "Xã Tân Xuân", province: 1, district: 703
    },
    {
        id: 27583, name: "Xã Xuân Thới Đông", province: 1, district: 703
    },
    {
        id: 27586, name: "Xã Trung Chánh", province: 1, district: 703
    },
    {
        id: 27589, name: "Xã Xuân Thới Thượng", province: 1, district: 703
    },
    {
        id: 27592, name: "Xã Bà Điểm", province: 1, district: 703
    },
    {
        id: 27664, name: "Thị trấn Cần Thạnh", province: 1, district: 704
    },
    {
        id: 27667, name: "Xã Bình Khánh", province: 1, district: 704
    },
    {
        id: 27670, name: "Xã Tam Thôn Hiệp", province: 1, district: 704
    },
    {
        id: 27673, name: "Xã An Thới Đông", province: 1, district: 704
    },
    {
        id: 27676, name: "Xã Thạnh An", province: 1, district: 704
    },
    {
        id: 27679, name: "Xã Long Hòa", province: 1, district: 704
    },
    {
        id: 27682, name: "Xã Lý Nhơn", province: 1, district: 704
    },
    {
        id: 27496, name: "Thị trấn Củ Chi", province: 1, district: 705
    },
    {
        id: 27499, name: "Xã Phú Mỹ Hưng", province: 1, district: 705
    },
    {
        id: 27502, name: "Xã An Phú", province: 1, district: 705
    },
    {
        id: 27505, name: "Xã Trung Lập Thượng", province: 1, district: 705
    },
    {
        id: 27508, name: "Xã An Nhơn Tây", province: 1, district: 705
    },
    {
        id: 27511, name: "Xã Nhuận Đức", province: 1, district: 705
    },
    {
        id: 27514, name: "Xã Phạm Văn Cội", province: 1, district: 705
    },
    {
        id: 27517, name: "Xã Phú Hòa Đông", province: 1, district: 705
    },
    {
        id: 27520, name: "Xã Trung Lập Hạ", province: 1, district: 705
    },
    {
        id: 27523, name: "Xã Trung An", province: 1, district: 705
    },
    {
        id: 27526, name: "Xã Phước Thạnh", province: 1, district: 705
    },
    {
        id: 27529, name: "Xã Phước Hiệp", province: 1, district: 705
    },
    {
        id: 27532, name: "Xã Tân An Hội", province: 1, district: 705
    },
    {
        id: 27535, name: "Xã Phước Vĩnh An", province: 1, district: 705
    },
    {
        id: 27538, name: "Xã Thái Mỹ", province: 1, district: 705
    },
    {
        id: 27541, name: "Xã Tân Thạnh Tây", province: 1, district: 705
    },
    {
        id: 27544, name: "Xã Hòa Phú", province: 1, district: 705
    },
    {
        id: 27547, name: "Xã Tân Thạnh Đông", province: 1, district: 705
    },
    {
        id: 27550, name: "Xã Bình Mỹ", province: 1, district: 705
    },
    {
        id: 27553, name: "Xã Tân Phú Trung", province: 1, district: 705
    },
    {
        id: 27556, name: "Xã Tân Thông Hội", province: 1, district: 705
    },
    {
        id: 27643, name: "Thị trấn Nhà Bè", province: 1, district: 713
    },
    {
        id: 27646, name: "Xã Phước Kiển", province: 1, district: 713
    },
    {
        id: 27649, name: "Xã Phước Lộc", province: 1, district: 713
    },
    {
        id: 27652, name: "Xã Nhơn Đức", province: 1, district: 713
    },
    {
        id: 27655, name: "Xã Phú Xuân", province: 1, district: 713
    },
    {
        id: 27658, name: "Xã Long Thới", province: 1, district: 713
    },
    {
        id: 27661, name: "Xã Hiệp Phước", province: 1, district: 713
    },
    {
        id: 1, name: "Phường Phúc Xá", province: 2, district: 21
    },
    {
        id: 4, name: "Phường Trúc Bạch", province: 2, district: 21
    },
    {
        id: 6, name: "Phường Vĩnh Phúc", province: 2, district: 21
    },
    {
        id: 7, name: "Phường Cống Vị", province: 2, district: 21
    },
    {
        id: 8, name: "Phường Liễu Giai", province: 2, district: 21
    },
    {
        id: 10, name: "Phường Nguyễn Trung Trực", province: 2, district: 21
    },
    {
        id: 13, name: "Phường Quán Thánh", province: 2, district: 21
    },
    {
        id: 16, name: "Phường Ngọc Hà", province: 2, district: 21
    },
    {
        id: 19, name: "Phường Điện Biên", province: 2, district: 21
    },
    {
        id: 22, name: "Phường Đội Cấn", province: 2, district: 21
    },
    {
        id: 25, name: "Phường Ngọc Khánh", province: 2, district: 21
    },
    {
        id: 28, name: "Phường Kim Mã", province: 2, district: 21
    },
    {
        id: 31, name: "Phường Giảng Võ", province: 2, district: 21
    },
    {
        id: 34, name: "Phường Thành Công", province: 2, district: 21
    },
    {
        id: 37, name: "Phường Phúc Tân", province: 2, district: 22
    },
    {
        id: 40, name: "Phường Đồng Xuân", province: 2, district: 22
    },
    {
        id: 43, name: "Phường Hàng Mã", province: 2, district: 22
    },
    {
        id: 46, name: "Phường Hàng Buồm", province: 2, district: 22
    },
    {
        id: 49, name: "Phường Hàng Đào", province: 2, district: 22
    },
    {
        id: 52, name: "Phường Hàng Bồ", province: 2, district: 22
    },
    {
        id: 55, name: "Phường Cửa Đông", province: 2, district: 22
    },
    {
        id: 58, name: "Phường Lý Thái Tổ", province: 2, district: 22
    },
    {
        id: 61, name: "Phường Hàng Bạc", province: 2, district: 22
    },
    {
        id: 64, name: "Phường Hàng Gai", province: 2, district: 22
    },
    {
        id: 67, name: "Phường Chương Dương Độ", province: 2, district: 22
    },
    {
        id: 70, name: "Phường Hàng Trống", province: 2, district: 22
    },
    {
        id: 73, name: "Phường Cửa Nam", province: 2, district: 22
    },
    {
        id: 76, name: "Phường Hàng Bông", province: 2, district: 22
    },
    {
        id: 79, name: "Phường Tràng Tiền", province: 2, district: 22
    },
    {
        id: 82, name: "Phường Trần Hưng Đạo", province: 2, district: 22
    },
    {
        id: 85, name: "Phường Phan Chu Trinh", province: 2, district: 22
    },
    {
        id: 88, name: "Phường Hàng Bài", province: 2, district: 22
    },
    {
        id: 241, name: "Phường Nguyễn Du", province: 2, district: 23
    },
    {
        id: 244, name: "Phường Bạch Đằng", province: 2, district: 23
    },
    {
        id: 247, name: "Phường Phạm Đình Hổ", province: 2, district: 23
    },
    {
        id: 250, name: "Phường Bùi Thị Xuân", province: 2, district: 23
    },
    {
        id: 253, name: "Phường Ngô Thì Nhậm", province: 2, district: 23
    },
    {
        id: 256, name: "Phường Lê Đại Hành", province: 2, district: 23
    },
    {
        id: 259, name: "Phường Đồng Nhân", province: 2, district: 23
    },
    {
        id: 262, name: "Phường Phố Huế", province: 2, district: 23
    },
    {
        id: 265, name: "Phường Đống Mác", province: 2, district: 23
    },
    {
        id: 268, name: "Phường Thanh Lương", province: 2, district: 23
    },
    {
        id: 271, name: "Phường Thanh Nhàn", province: 2, district: 23
    },
    {
        id: 274, name: "Phường Cầu Dền", province: 2, district: 23
    },
    {
        id: 277, name: "Phường Bách Khoa", province: 2, district: 23
    },
    {
        id: 280, name: "Phường Đồng Tâm", province: 2, district: 23
    },
    {
        id: 283, name: "Phường Vĩnh Tuy", province: 2, district: 23
    },
    {
        id: 286, name: "Phường Bạch Mai", province: 2, district: 23
    },
    {
        id: 289, name: "Phường Quỳnh Mai", province: 2, district: 23
    },
    {
        id: 292, name: "Phường Quỳnh Lôi", province: 2, district: 23
    },
    {
        id: 295, name: "Phường Minh Khai", province: 2, district: 23
    },
    {
        id: 298, name: "Phường Trương Định", province: 2, district: 23
    },
    {
        id: 178, name: "Phường Cát Linh", province: 2, district: 24
    },
    {
        id: 181, name: "Phường Văn Miếu", province: 2, district: 24
    },
    {
        id: 184, name: "Phường Quốc Tử Giám", province: 2, district: 24
    },
    {
        id: 187, name: "Phường Láng Thượng", province: 2, district: 24
    },
    {
        id: 190, name: "Phường Ô Chợ Dừa", province: 2, district: 24
    },
    {
        id: 193, name: "Phường Văn Chương", province: 2, district: 24
    },
    {
        id: 196, name: "Phường Hàng Bột", province: 2, district: 24
    },
    {
        id: 199, name: "Phường Láng Hạ", province: 2, district: 24
    },
    {
        id: 202, name: "Phường Khâm Thiên", province: 2, district: 24
    },
    {
        id: 205, name: "Phường Thổ Quan", province: 2, district: 24
    },
    {
        id: 208, name: "Phường Nam Đồng", province: 2, district: 24
    },
    {
        id: 211, name: "Phường Trung Phụng", province: 2, district: 24
    },
    {
        id: 214, name: "Phường Quang Trung", province: 2, district: 24
    },
    {
        id: 217, name: "Phường Trung Liệt", province: 2, district: 24
    },
    {
        id: 220, name: "Phường Phương Liên", province: 2, district: 24
    },
    {
        id: 223, name: "Phường Thịnh Quang", province: 2, district: 24
    },
    {
        id: 226, name: "Phường Trung Tự", province: 2, district: 24
    },
    {
        id: 229, name: "Phường Kim Liên", province: 2, district: 24
    },
    {
        id: 232, name: "Phường Phương Mai", province: 2, district: 24
    },
    {
        id: 235, name: "Phường Ngã Tư Sở", province: 2, district: 24
    },
    {
        id: 238, name: "Phường Khương Thượng", province: 2, district: 24
    },
    {
        id: 91, name: "Phường Phú Thượng", province: 2, district: 25
    },
    {
        id: 94, name: "Phường Nhật Tân", province: 2, district: 25
    },
    {
        id: 97, name: "Phường Tứ Liên", province: 2, district: 25
    },
    {
        id: 100, name: "Phường Quảng An", province: 2, district: 25
    },
    {
        id: 103, name: "Phường Xuân La", province: 2, district: 25
    },
    {
        id: 106, name: "Phường Yên Phụ", province: 2, district: 25
    },
    {
        id: 109, name: "Phường Bưởi", province: 2, district: 25
    },
    {
        id: 112, name: "Phường Thuỵ Khuê", province: 2, district: 25
    },
    {
        id: 157, name: "Phường Nghĩa Đô", province: 2, district: 26
    },
    {
        id: 160, name: "Phường Nghĩa Tân", province: 2, district: 26
    },
    {
        id: 163, name: "Phường Mai Dịch", province: 2, district: 26
    },
    {
        id: 166, name: "Phường Dịch Vọng", province: 2, district: 26
    },
    {
        id: 167, name: "Phường Dịch Vọng Hậu", province: 2, district: 26
    },
    {
        id: 169, name: "Phường Quan Hoa", province: 2, district: 26
    },
    {
        id: 172, name: "Phường Yên Hoà", province: 2, district: 26
    },
    {
        id: 175, name: "Phường Trung Hoà", province: 2, district: 26
    },
    {
        id: 343, name: "Phường Nhân Chính", province: 2, district: 27
    },
    {
        id: 346, name: "Phường Thượng Đình", province: 2, district: 27
    },
    {
        id: 349, name: "Phường Khương Trung", province: 2, district: 27
    },
    {
        id: 352, name: "Phường Khương Mai", province: 2, district: 27
    },
    {
        id: 355, name: "Phường Thanh Xuân Trung", province: 2, district: 27
    },
    {
        id: 358, name: "Phường Phương Liệt", province: 2, district: 27
    },
    {
        id: 361, name: "Phường Hạ Đình", province: 2, district: 27
    },
    {
        id: 364, name: "Phường Khương Đình", province: 2, district: 27
    },
    {
        id: 367, name: "Phường Thanh Xuân Bắc", province: 2, district: 27
    },
    {
        id: 370, name: "Phường Thanh Xuân Nam", province: 2, district: 27
    },
    {
        id: 373, name: "Phường Kim Giang", province: 2, district: 27
    },
    {
        id: 301, name: "Phường Thanh Trì", province: 2, district: 28
    },
    {
        id: 304, name: "Phường Vĩnh Hưng", province: 2, district: 28
    },
    {
        id: 307, name: "Phường Định Công", province: 2, district: 28
    },
    {
        id: 310, name: "Phường Mai Động", province: 2, district: 28
    },
    {
        id: 313, name: "Phường Tương Mai", province: 2, district: 28
    },
    {
        id: 316, name: "Phường Đại Kim", province: 2, district: 28
    },
    {
        id: 319, name: "Phường Tân Mai", province: 2, district: 28
    },
    {
        id: 322, name: "Phường Hoàng Văn Thụ", province: 2, district: 28
    },
    {
        id: 325, name: "Phường Giáp Bát", province: 2, district: 28
    },
    {
        id: 328, name: "Phường Lĩnh Nam", province: 2, district: 28
    },
    {
        id: 331, name: "Phường Thịnh Liệt", province: 2, district: 28
    },
    {
        id: 334, name: "Phường Trần Phú", province: 2, district: 28
    },
    {
        id: 337, name: "Phường Hoàng Liệt", province: 2, district: 28
    },
    {
        id: 340, name: "Phường Yên Sở", province: 2, district: 28
    },
    {
        id: 115, name: "Phường Thượng Thanh", province: 2, district: 29
    },
    {
        id: 118, name: "Phường Ngọc Thuỵ", province: 2, district: 29
    },
    {
        id: 121, name: "Phường Giang Biên", province: 2, district: 29
    },
    {
        id: 124, name: "Phường Đức Giang", province: 2, district: 29
    },
    {
        id: 127, name: "Phường Việt Hưng", province: 2, district: 29
    },
    {
        id: 130, name: "Phường Gia Thuỵ", province: 2, district: 29
    },
    {
        id: 133, name: "Phường Ngọc Lâm", province: 2, district: 29
    },
    {
        id: 136, name: "Phường Phúc Lợi", province: 2, district: 29
    },
    {
        id: 139, name: "Phường Bồ Đề", province: 2, district: 29
    },
    {
        id: 142, name: "Phường Sài Đồng", province: 2, district: 29
    },
    {
        id: 145, name: "Phường Long Biên", province: 2, district: 29
    },
    {
        id: 148, name: "Phường Thạch Bàn", province: 2, district: 29
    },
    {
        id: 151, name: "Phường Phúc Đồng", province: 2, district: 29
    },
    {
        id: 154, name: "Phường Cự Khối", province: 2, district: 29
    },
    {
        id: 592, name: "Phường Cầu Diễn", province: 2, district: 30
    },
    {
        id: 622, name: "Phường Xuân Phương", province: 2, district: 30
    },
    {
        id: 623, name: "Phường Phương Canh", province: 2, district: 30
    },
    {
        id: 625, name: "Phường Mỹ Đình 1", province: 2, district: 30
    },
    {
        id: 626, name: "Phường Mỹ Đình 2", province: 2, district: 30
    },
    {
        id: 628, name: "Phường Tây Mỗ", province: 2, district: 30
    },
    {
        id: 631, name: "Phường Mễ Trì", province: 2, district: 30
    },
    {
        id: 632, name: "Phường Phú Đô", province: 2, district: 30
    },
    {
        id: 634, name: "Phường Đại Mỗ", province: 2, district: 30
    },
    {
        id: 637, name: "Phường Trung Văn", province: 2, district: 30
    },
    {
        id: 640, name: "Thị trấn Văn Điển", province: 2, district: 31
    },
    {
        id: 643, name: "Xã Tân Triều", province: 2, district: 31
    },
    {
        id: 646, name: "Xã Thanh Liệt", province: 2, district: 31
    },
    {
        id: 649, name: "Xã Tả Thanh Oai", province: 2, district: 31
    },
    {
        id: 652, name: "Xã Hữu Hoà", province: 2, district: 31
    },
    {
        id: 655, name: "Xã Tam Hiệp", province: 2, district: 31
    },
    {
        id: 658, name: "Xã Tứ Hiệp", province: 2, district: 31
    },
    {
        id: 661, name: "Xã Yên Mỹ", province: 2, district: 31
    },
    {
        id: 664, name: "Xã Vĩnh Quỳnh", province: 2, district: 31
    },
    {
        id: 667, name: "Xã Ngũ Hiệp", province: 2, district: 31
    },
    {
        id: 670, name: "Xã Duyên Hà", province: 2, district: 31
    },
    {
        id: 673, name: "Xã Ngọc Hồi", province: 2, district: 31
    },
    {
        id: 676, name: "Xã Vạn Phúc", province: 2, district: 31
    },
    {
        id: 679, name: "Xã Đại Áng", province: 2, district: 31
    },
    {
        id: 682, name: "Xã Liên Ninh", province: 2, district: 31
    },
    {
        id: 685, name: "Xã Đông Mỹ", province: 2, district: 31
    },
    {
        id: 526, name: "Thị trấn Yên Viên", province: 2, district: 32
    },
    {
        id: 529, name: "Xã Yên Thường", province: 2, district: 32
    },
    {
        id: 532, name: "Xã Yên Viên", province: 2, district: 32
    },
    {
        id: 535, name: "Xã Ninh Hiệp", province: 2, district: 32
    },
    {
        id: 538, name: "Xã Đình Xuyên", province: 2, district: 32
    },
    {
        id: 541, name: "Xã Dương Hà", province: 2, district: 32
    },
    {
        id: 544, name: "Xã Phù Đổng", province: 2, district: 32
    },
    {
        id: 547, name: "Xã Trung Mầu", province: 2, district: 32
    },
    {
        id: 550, name: "Xã Lệ Chi", province: 2, district: 32
    },
    {
        id: 553, name: "Xã Cổ Bi", province: 2, district: 32
    },
    {
        id: 556, name: "Xã Đặng Xá", province: 2, district: 32
    },
    {
        id: 559, name: "Xã Phú Thị", province: 2, district: 32
    },
    {
        id: 562, name: "Xã Kim Sơn", province: 2, district: 32
    },
    {
        id: 565, name: "Thị trấn Trâu Quỳ", province: 2, district: 32
    },
    {
        id: 568, name: "Xã Dương Quang", province: 2, district: 32
    },
    {
        id: 571, name: "Xã Dương Xá", province: 2, district: 32
    },
    {
        id: 574, name: "Xã Đông Dư", province: 2, district: 32
    },
    {
        id: 577, name: "Xã Đa Tốn", province: 2, district: 32
    },
    {
        id: 580, name: "Xã Kiêu Kỵ", province: 2, district: 32
    },
    {
        id: 583, name: "Xã Bát Tràng", province: 2, district: 32
    },
    {
        id: 586, name: "Xã Kim Lan", province: 2, district: 32
    },
    {
        id: 589, name: "Xã Văn Đức", province: 2, district: 32
    },
    {
        id: 454, name: "Thị trấn Đông Anh", province: 2, district: 33
    },
    {
        id: 457, name: "Xã Xuân Nộn", province: 2, district: 33
    },
    {
        id: 460, name: "Xã Thuỵ Lâm", province: 2, district: 33
    },
    {
        id: 463, name: "Xã Bắc Hồng", province: 2, district: 33
    },
    {
        id: 466, name: "Xã Nguyên Khê", province: 2, district: 33
    },
    {
        id: 469, name: "Xã Nam Hồng", province: 2, district: 33
    },
    {
        id: 472, name: "Xã Tiên Dương", province: 2, district: 33
    },
    {
        id: 475, name: "Xã Vân Hà", province: 2, district: 33
    },
    {
        id: 478, name: "Xã Uy Nỗ", province: 2, district: 33
    },
    {
        id: 481, name: "Xã Vân Nội", province: 2, district: 33
    },
    {
        id: 484, name: "Xã Liên Hà", province: 2, district: 33
    },
    {
        id: 487, name: "Xã Việt Hùng", province: 2, district: 33
    },
    {
        id: 490, name: "Xã Kim Nỗ", province: 2, district: 33
    },
    {
        id: 493, name: "Xã Kim Chung", province: 2, district: 33
    },
    {
        id: 496, name: "Xã Dục Tú", province: 2, district: 33
    },
    {
        id: 499, name: "Xã Đại Mạch", province: 2, district: 33
    },
    {
        id: 502, name: "Xã Vĩnh Ngọc", province: 2, district: 33
    },
    {
        id: 505, name: "Xã Cổ Loa", province: 2, district: 33
    },
    {
        id: 508, name: "Xã Hải Bối", province: 2, district: 33
    },
    {
        id: 511, name: "Xã Xuân Canh", province: 2, district: 33
    },
    {
        id: 514, name: "Xã Võng La", province: 2, district: 33
    },
    {
        id: 517, name: "Xã Tầm Xá", province: 2, district: 33
    },
    {
        id: 520, name: "Xã Mai Lâm", province: 2, district: 33
    },
    {
        id: 523, name: "Xã Đông Hội", province: 2, district: 33
    },
    {
        id: 376, name: "Thị trấn Sóc Sơn", province: 2, district: 34
    },
    {
        id: 379, name: "Xã Bắc Sơn", province: 2, district: 34
    },
    {
        id: 382, name: "Xã Minh Trí", province: 2, district: 34
    },
    {
        id: 385, name: "Xã Hồng Kỳ", province: 2, district: 34
    },
    {
        id: 388, name: "Xã Nam Sơn", province: 2, district: 34
    },
    {
        id: 391, name: "Xã Trung Giã", province: 2, district: 34
    },
    {
        id: 394, name: "Xã Tân Hưng", province: 2, district: 34
    },
    {
        id: 397, name: "Xã Minh Phú", province: 2, district: 34
    },
    {
        id: 400, name: "Xã Phù Linh", province: 2, district: 34
    },
    {
        id: 403, name: "Xã Bắc Phú", province: 2, district: 34
    },
    {
        id: 406, name: "Xã Tân Minh", province: 2, district: 34
    },
    {
        id: 409, name: "Xã Quang Tiến", province: 2, district: 34
    },
    {
        id: 412, name: "Xã Hiền Ninh", province: 2, district: 34
    },
    {
        id: 415, name: "Xã Tân Dân", province: 2, district: 34
    },
    {
        id: 418, name: "Xã Tiên Dược", province: 2, district: 34
    },
    {
        id: 421, name: "Xã Việt Long", province: 2, district: 34
    },
    {
        id: 424, name: "Xã Xuân Giang", province: 2, district: 34
    },
    {
        id: 427, name: "Xã Mai Đình", province: 2, district: 34
    },
    {
        id: 430, name: "Xã Đức Hoà", province: 2, district: 34
    },
    {
        id: 433, name: "Xã Thanh Xuân", province: 2, district: 34
    },
    {
        id: 436, name: "Xã Đông Xuân", province: 2, district: 34
    },
    {
        id: 439, name: "Xã Kim Lũ", province: 2, district: 34
    },
    {
        id: 442, name: "Xã Phú Cường", province: 2, district: 34
    },
    {
        id: 445, name: "Xã Phú Minh", province: 2, district: 34
    },
    {
        id: 448, name: "Xã Phù Lỗ", province: 2, district: 34
    },
    {
        id: 451, name: "Xã Xuân Thu", province: 2, district: 34
    },
    {
        id: 9538, name: "Phường Nguyễn Trãi", province: 2, district: 265
    },
    {
        id: 9541, name: "Phường Mộ Lao", province: 2, district: 265
    },
    {
        id: 9542, name: "Phường Văn Quán", province: 2, district: 265
    },
    {
        id: 9544, name: "Phường Vạn Phúc", province: 2, district: 265
    },
    {
        id: 9547, name: "Phường Yết Kiêu", province: 2, district: 265
    },
    {
        id: 9550, name: "Phường Quang Trung", province: 2, district: 265
    },
    {
        id: 9551, name: "Phường La Khê", province: 2, district: 265
    },
    {
        id: 9552, name: "Phường Phú La", province: 2, district: 265
    },
    {
        id: 9553, name: "Phường Phúc La", province: 2, district: 265
    },
    {
        id: 9556, name: "Phường Hà Cầu", province: 2, district: 265
    },
    {
        id: 9562, name: "Phường Yên Nghĩa", province: 2, district: 265
    },
    {
        id: 9565, name: "Phường Kiến Hưng", province: 2, district: 265
    },
    {
        id: 9568, name: "Phường Phú Lãm", province: 2, district: 265
    },
    {
        id: 9571, name: "Phường Phú Lương", province: 2, district: 265
    },
    {
        id: 9886, name: "Phường Dương Nội", province: 2, district: 265
    },
    {
        id: 10117, name: "Phường Đồng Mai", province: 2, district: 265
    },
    {
        id: 10123, name: "Phường Biên Giang", province: 2, district: 265
    },
    {
        id: 9574, name: "Phường Lê Lợi", province: 2, district: 266
    },
    {
        id: 9577, name: "Phường Phú Thịnh", province: 2, district: 266
    },
    {
        id: 9580, name: "Phường Ngô Quyền", province: 2, district: 266
    },
    {
        id: 9583, name: "Phường Quang Trung", province: 2, district: 266
    },
    {
        id: 9586, name: "Phường Sơn Lộc", province: 2, district: 266
    },
    {
        id: 9589, name: "Phường Xuân Khanh", province: 2, district: 266
    },
    {
        id: 9592, name: "Xã Đường Lâm", province: 2, district: 266
    },
    {
        id: 9595, name: "Phường Viên Sơn", province: 2, district: 266
    },
    {
        id: 9598, name: "Xã Xuân Sơn", province: 2, district: 266
    },
    {
        id: 9601, name: "Phường Trung Hưng", province: 2, district: 266
    },
    {
        id: 9604, name: "Xã Thanh Mỹ", province: 2, district: 266
    },
    {
        id: 9607, name: "Phường Trung Sơn Trầm", province: 2, district: 266
    },
    {
        id: 9610, name: "Xã Kim Sơn", province: 2, district: 266
    },
    {
        id: 9613, name: "Xã Sơn Đông", province: 2, district: 266
    },
    {
        id: 9616, name: "Xã Cổ Đông", province: 2, district: 266
    },
    {
        id: 9619, name: "Thị trấn Tây Đằng", province: 2, district: 267
    },
    {
        id: 9625, name: "Xã Phú Cường", province: 2, district: 267
    },
    {
        id: 9628, name: "Xã Cổ Đô", province: 2, district: 267
    },
    {
        id: 9631, name: "Xã Tản Hồng", province: 2, district: 267
    },
    {
        id: 9634, name: "Xã Vạn Thắng", province: 2, district: 267
    },
    {
        id: 9637, name: "Xã Châu Sơn", province: 2, district: 267
    },
    {
        id: 9640, name: "Xã Phong Vân", province: 2, district: 267
    },
    {
        id: 9643, name: "Xã Phú Đông", province: 2, district: 267
    },
    {
        id: 9646, name: "Xã Phú Phương", province: 2, district: 267
    },
    {
        id: 9649, name: "Xã Phú Châu", province: 2, district: 267
    },
    {
        id: 9652, name: "Xã Thái Hòa", province: 2, district: 267
    },
    {
        id: 9655, name: "Xã Đồng Thái", province: 2, district: 267
    },
    {
        id: 9658, name: "Xã Phú Sơn", province: 2, district: 267
    },
    {
        id: 9661, name: "Xã Minh Châu", province: 2, district: 267
    },
    {
        id: 9664, name: "Xã Vật Lại", province: 2, district: 267
    },
    {
        id: 9667, name: "Xã Chu Minh", province: 2, district: 267
    },
    {
        id: 9670, name: "Xã Tòng Bạt", province: 2, district: 267
    },
    {
        id: 9673, name: "Xã Cẩm Lĩnh", province: 2, district: 267
    },
    {
        id: 9676, name: "Xã Sơn Đà", province: 2, district: 267
    },
    {
        id: 9679, name: "Xã Đông Quang", province: 2, district: 267
    },
    {
        id: 9682, name: "Xã Tiên Phong", province: 2, district: 267
    },
    {
        id: 9685, name: "Xã Thụy An", province: 2, district: 267
    },
    {
        id: 9688, name: "Xã Cam Thượng", province: 2, district: 267
    },
    {
        id: 9691, name: "Xã Thuần Mỹ", province: 2, district: 267
    },
    {
        id: 9694, name: "Xã Tản Lĩnh", province: 2, district: 267
    },
    {
        id: 9697, name: "Xã Ba Trại", province: 2, district: 267
    },
    {
        id: 9700, name: "Xã Minh Quang", province: 2, district: 267
    },
    {
        id: 9703, name: "Xã Ba Vì", province: 2, district: 267
    },
    {
        id: 9706, name: "Xã Vân Hòa", province: 2, district: 267
    },
    {
        id: 9709, name: "Xã Yên Bài", province: 2, district: 267
    },
    {
        id: 9712, name: "Xã Khánh Thượng", province: 2, district: 267
    },
    {
        id: 9715, name: "Thị trấn Phúc Thọ", province: 2, district: 268
    },
    {
        id: 9718, name: "Xã Vân Hà", province: 2, district: 268
    },
    {
        id: 9721, name: "Xã Vân Phúc", province: 2, district: 268
    },
    {
        id: 9724, name: "Xã Vân Nam", province: 2, district: 268
    },
    {
        id: 9727, name: "Xã Xuân Phú", province: 2, district: 268
    },
    {
        id: 9730, name: "Xã Phương Độ", province: 2, district: 268
    },
    {
        id: 9733, name: "Xã Sen Chiểu", province: 2, district: 268
    },
    {
        id: 9736, name: "Xã Cẩm Đình", province: 2, district: 268
    },
    {
        id: 9739, name: "Xã Võng Xuyên", province: 2, district: 268
    },
    {
        id: 9742, name: "Xã Thọ Lộc", province: 2, district: 268
    },
    {
        id: 9745, name: "Xã Long Xuyên", province: 2, district: 268
    },
    {
        id: 9748, name: "Xã Thượng Cốc", province: 2, district: 268
    },
    {
        id: 9751, name: "Xã Hát Môn", province: 2, district: 268
    },
    {
        id: 9754, name: "Xã Tích Giang", province: 2, district: 268
    },
    {
        id: 9757, name: "Xã Thanh Đa", province: 2, district: 268
    },
    {
        id: 9760, name: "Xã Trạch Mỹ Lộc", province: 2, district: 268
    },
    {
        id: 9763, name: "Xã Phúc Hòa", province: 2, district: 268
    },
    {
        id: 9766, name: "Xã Ngọc Tảo", province: 2, district: 268
    },
    {
        id: 9769, name: "Xã Phụng Thượng", province: 2, district: 268
    },
    {
        id: 9772, name: "Xã Tam Thuấn", province: 2, district: 268
    },
    {
        id: 9775, name: "Xã Tam Hiệp", province: 2, district: 268
    },
    {
        id: 9778, name: "Xã Hiệp Thuận", province: 2, district: 268
    },
    {
        id: 9781, name: "Xã Liên Hiệp", province: 2, district: 268
    },
    {
        id: 4927, name: "Xã Yên Trung", province: 2, district: 269
    },
    {
        id: 4930, name: "Xã Yên Bình", province: 2, district: 269
    },
    {
        id: 4936, name: "Xã Tiến Xuân", province: 2, district: 269
    },
    {
        id: 9955, name: "Thị trấn Liên Quan", province: 2, district: 269
    },
    {
        id: 9958, name: "Xã Đại Đồng", province: 2, district: 269
    },
    {
        id: 9961, name: "Xã Cẩm Yên", province: 2, district: 269
    },
    {
        id: 9964, name: "Xã Lại Thượng", province: 2, district: 269
    },
    {
        id: 9967, name: "Xã Phú Kim", province: 2, district: 269
    },
    {
        id: 9970, name: "Xã Hương Ngải", province: 2, district: 269
    },
    {
        id: 9973, name: "Xã Canh Nậu", province: 2, district: 269
    },
    {
        id: 9976, name: "Xã Kim Quan", province: 2, district: 269
    },
    {
        id: 9979, name: "Xã Dị Nậu", province: 2, district: 269
    },
    {
        id: 9982, name: "Xã Bình Yên", province: 2, district: 269
    },
    {
        id: 9985, name: "Xã Chàng Sơn", province: 2, district: 269
    },
    {
        id: 9988, name: "Xã Thạch Hoà", province: 2, district: 269
    },
    {
        id: 9991, name: "Xã Cần Kiệm", province: 2, district: 269
    },
    {
        id: 9994, name: "Xã Hữu Bằng", province: 2, district: 269
    },
    {
        id: 9997, name: "Xã Phùng Xá", province: 2, district: 269
    },
    {
        id: 10000, name: "Xã Tân Xã", province: 2, district: 269
    },
    {
        id: 10003, name: "Xã Thạch Xá", province: 2, district: 269
    },
    {
        id: 10006, name: "Xã Bình Phú", province: 2, district: 269
    },
    {
        id: 10009, name: "Xã Hạ Bằng", province: 2, district: 269
    },
    {
        id: 10012, name: "Xã Đồng Trúc", province: 2, district: 269
    },
    {
        id: 4939, name: "Xã Đông Xuân", province: 2, district: 270
    },
    {
        id: 9895, name: "Thị trấn Quốc Oai", province: 2, district: 270
    },
    {
        id: 9898, name: "Xã Sài Sơn", province: 2, district: 270
    },
    {
        id: 9901, name: "Xã Phượng Cách", province: 2, district: 270
    },
    {
        id: 9904, name: "Xã Yên Sơn", province: 2, district: 270
    },
    {
        id: 9907, name: "Xã Ngọc Liệp", province: 2, district: 270
    },
    {
        id: 9910, name: "Xã Ngọc Mỹ", province: 2, district: 270
    },
    {
        id: 9913, name: "Xã Liệp Tuyết", province: 2, district: 270
    },
    {
        id: 9916, name: "Xã Thạch Thán", province: 2, district: 270
    },
    {
        id: 9919, name: "Xã Đồng Quang", province: 2, district: 270
    },
    {
        id: 9922, name: "Xã Phú Cát", province: 2, district: 270
    },
    {
        id: 9925, name: "Xã Tuyết Nghĩa", province: 2, district: 270
    },
    {
        id: 9928, name: "Xã Nghĩa Hương", province: 2, district: 270
    },
    {
        id: 9931, name: "Xã Cộng Hòa", province: 2, district: 270
    },
    {
        id: 9934, name: "Xã Tân Phú", province: 2, district: 270
    },
    {
        id: 9937, name: "Xã Đại Thành", province: 2, district: 270
    },
    {
        id: 9940, name: "Xã Phú Mãn", province: 2, district: 270
    },
    {
        id: 9943, name: "Xã Cấn Hữu", province: 2, district: 270
    },
    {
        id: 9946, name: "Xã Tân Hòa", province: 2, district: 270
    },
    {
        id: 9949, name: "Xã Hòa Thạch", province: 2, district: 270
    },
    {
        id: 9952, name: "Xã Đông Yên", province: 2, district: 270
    },
    {
        id: 10015, name: "Thị trấn Chúc Sơn", province: 2, district: 271
    },
    {
        id: 10018, name: "Thị trấn Xuân Mai", province: 2, district: 271
    },
    {
        id: 10021, name: "Xã Phụng Châu", province: 2, district: 271
    },
    {
        id: 10024, name: "Xã Tiên Phương", province: 2, district: 271
    },
    {
        id: 10027, name: "Xã Đông Sơn", province: 2, district: 271
    },
    {
        id: 10030, name: "Xã Đông Phương Yên", province: 2, district: 271
    },
    {
        id: 10033, name: "Xã Phú Nghĩa", province: 2, district: 271
    },
    {
        id: 10039, name: "Xã Trường Yên", province: 2, district: 271
    },
    {
        id: 10042, name: "Xã Ngọc Hòa", province: 2, district: 271
    },
    {
        id: 10045, name: "Xã Thủy Xuân Tiên", province: 2, district: 271
    },
    {
        id: 10048, name: "Xã Thanh Bình", province: 2, district: 271
    },
    {
        id: 10051, name: "Xã Trung Hòa", province: 2, district: 271
    },
    {
        id: 10054, name: "Xã Đại Yên", province: 2, district: 271
    },
    {
        id: 10057, name: "Xã Thụy Hương", province: 2, district: 271
    },
    {
        id: 10060, name: "Xã Tốt Động", province: 2, district: 271
    },
    {
        id: 10063, name: "Xã Lam Điền", province: 2, district: 271
    },
    {
        id: 10066, name: "Xã Tân Tiến", province: 2, district: 271
    },
    {
        id: 10069, name: "Xã Nam Phương Tiến", province: 2, district: 271
    },
    {
        id: 10072, name: "Xã Hợp Đồng", province: 2, district: 271
    },
    {
        id: 10075, name: "Xã Hoàng Văn Thụ", province: 2, district: 271
    },
    {
        id: 10078, name: "Xã Hoàng Diệu", province: 2, district: 271
    },
    {
        id: 10081, name: "Xã Hữu Văn", province: 2, district: 271
    },
    {
        id: 10084, name: "Xã Quảng Bị", province: 2, district: 271
    },
    {
        id: 10087, name: "Xã Mỹ Lương", province: 2, district: 271
    },
    {
        id: 10090, name: "Xã Thượng Vực", province: 2, district: 271
    },
    {
        id: 10093, name: "Xã Hồng Phong", province: 2, district: 271
    },
    {
        id: 10096, name: "Xã Đồng Phú", province: 2, district: 271
    },
    {
        id: 10099, name: "Xã Trần Phú", province: 2, district: 271
    },
    {
        id: 10102, name: "Xã Văn Võ", province: 2, district: 271
    },
    {
        id: 10105, name: "Xã Đồng Lạc", province: 2, district: 271
    },
    {
        id: 10108, name: "Xã Hòa Chính", province: 2, district: 271
    },
    {
        id: 10111, name: "Xã Phú Nam An", province: 2, district: 271
    },
    {
        id: 9784, name: "Thị trấn Phùng", province: 2, district: 272
    },
    {
        id: 9787, name: "Xã Trung Châu", province: 2, district: 272
    },
    {
        id: 9790, name: "Xã Thọ An", province: 2, district: 272
    },
    {
        id: 9793, name: "Xã Thọ Xuân", province: 2, district: 272
    },
    {
        id: 9796, name: "Xã Hồng Hà", province: 2, district: 272
    },
    {
        id: 9799, name: "Xã Liên Hồng", province: 2, district: 272
    },
    {
        id: 9802, name: "Xã Liên Hà", province: 2, district: 272
    },
    {
        id: 9805, name: "Xã Hạ Mỗ", province: 2, district: 272
    },
    {
        id: 9808, name: "Xã Liên Trung", province: 2, district: 272
    },
    {
        id: 9811, name: "Xã Phương Đình", province: 2, district: 272
    },
    {
        id: 9814, name: "Xã Thượng Mỗ", province: 2, district: 272
    },
    {
        id: 9817, name: "Xã Tân Hội", province: 2, district: 272
    },
    {
        id: 9820, name: "Xã Tân Lập", province: 2, district: 272
    },
    {
        id: 9823, name: "Xã Đan Phượng", province: 2, district: 272
    },
    {
        id: 9826, name: "Xã Đồng Tháp", province: 2, district: 272
    },
    {
        id: 9829, name: "Xã Song Phượng", province: 2, district: 272
    },
    {
        id: 9832, name: "Thị trấn Trạm Trôi", province: 2, district: 273
    },
    {
        id: 9835, name: "Xã Đức Thượng", province: 2, district: 273
    },
    {
        id: 9838, name: "Xã Minh Khai", province: 2, district: 273
    },
    {
        id: 9841, name: "Xã Dương Liễu", province: 2, district: 273
    },
    {
        id: 9844, name: "Xã Di Trạch", province: 2, district: 273
    },
    {
        id: 9847, name: "Xã Đức Giang", province: 2, district: 273
    },
    {
        id: 9850, name: "Xã Cát Quế", province: 2, district: 273
    },
    {
        id: 9853, name: "Xã Kim Chung", province: 2, district: 273
    },
    {
        id: 9856, name: "Xã Yên Sở", province: 2, district: 273
    },
    {
        id: 9859, name: "Xã Sơn Đồng", province: 2, district: 273
    },
    {
        id: 9862, name: "Xã Vân Canh", province: 2, district: 273
    },
    {
        id: 9865, name: "Xã Đắc Sở", province: 2, district: 273
    },
];
exports.LIST_WARD = LIST_WARD;
