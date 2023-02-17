import { Book, PrismaClient } from '@prisma/client';
import { CreateBookDto } from 'src/generated-dto/book/dto';
import { CreateUserDto } from 'src/generated-dto/user/dto';

const prisma = new PrismaClient();

const bookList: CreateBookDto[] = [
  {
    author: 'One, Yusuke Murata',
    category: 'Manga',
    description: `3 kiếm sĩ đệ tử của Võ Sĩ Hạt Nhân đã tựu kế giúp biệt đội lính đánh thuê của Narinki thoát khỏi sự chi phối của Đại S Công Chúa. Trên đường đào tẩu, cả đám lại đụng độ Ma Tóc Mây!! Kiếm Sĩ Máy Khoan, Kiếm Sĩ Giáp Sắt và Lưỡi Liềm Hifi buộc phải hợp sức chiến đấu mới địch lại hắn. Trong lúc đó, sư phụ của bọn họ là Võ Sĩ Hạt Nhân cũng chạm trán một kì phùng địch thủ đáng gờm…

    One

    “Tôi đang xem phim trên nền tảng trực tuyến. Ở đây có hàng ngàn tác phẩm thú vị…”

    Mã hàng	8935244886252
    Độ Tuổi	16+
    Tên Nhà Cung Cấp	Nhà Xuất Bản Kim Đồng
    Tác giả	One, Yusuke Murata
    Người Dịch	Barbie Ayumi, Mokey King
    NXB	Kim Đồng
    Năm XB	2023
    Ngôn Ngữ	Tiếng Việt
    Trọng lượng (gr)	128
    Kích Thước Bao Bì	17.6 x 11.3 cm
    Số trang	224
    Hình thức	Bìa Mềm
    Genres	Adventure, Action, Comedy, Sci Fi, Seinen, Drama
    Sản phẩm bán chạy nhất	Top 100 sản phẩm Manga Khác bán chạy của tháng
    Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...
    One-Punch Man - Tập 23: Thật - Giả - Tặng Kèm Bookmark PVC Saitama

    3 kiếm sĩ đệ tử của Võ Sĩ Hạt Nhân đã tựu kế giúp biệt đội lính đánh thuê của Narinki thoát khỏi sự chi phối của Đại S Công Chúa. Trên đường đào tẩu, cả đám lại đụng độ Ma Tóc Mây!! Kiếm Sĩ Máy Khoan, Kiếm Sĩ Giáp Sắt và Lưỡi Liềm Hifi buộc phải hợp sức chiến đấu mới địch lại hắn. Trong lúc đó, sư phụ của bọn họ là Võ Sĩ Hạt Nhân cũng chạm trán một kì phùng địch thủ đáng gờm…

    One

    “Tôi đang xem phim trên nền tảng trực tuyến. Ở đây có hàng ngàn tác phẩm thú vị…”`,
    code: '	8935244886252',
    coverForm: 'Bìa Mềm',
    coverType: 'Bìa Mềm',
    coverUrl:
      'https://cdn0.fahasa.com/media/catalog/product/o/n/one-punch-man---tap-23---that---gia.jpg',
    height: 17.6,
    width: 11.3,
    language: 'Tiếng Việt',
    numOfPages: 224,
    price: 30000,
    publisher: 'Kim Đồng',
    supplier: 'Nhà Xuất Bản Kim Đồng',
    weight: 128,
  },
  {
    author: 'Nguyên Phong',
    category: 'Manga',
    description: `Combo Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 1 & Tập 2 (Bộ 2 Tập)

    1. Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 1

    Giáo sư John Vũ – Nguyên Phong và những câu chuyện chưa từng có về tiền kiếp, khám phá luật Nhân quả, Luân hồi.

    “Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn tâm giao lâu năm, ông Thomas – một nhà kinh doanh tài chính nổi tiếng ở New York. Những câu chuyện chưa từng tiết lộ này sẽ giúp mọi người trên thế giới chiêm nghiệm, khám phá các quy luật về luật Nhân quả và Luân hồi của vũ trụ giữa lúc trái đất đang gặp nhiều tai ương, biến động, khủng hoảng từng ngày.

    “Muôn kiếp nhân sinh” là một bức tranh lớn với vô vàn mảnh ghép cuộc đời, là một cuốn phim đồ sộ, sống động về những kiếp sống huyền bí, trải dài từ nền văn minh Atlantis hùng mạnh đến vương quốc Ai Cập cổ đại của các Pharaoh quyền uy, đến Hợp Chủng Quốc Hoa Kỳ ngày nay.

    “Muôn kiếp nhân sinh”cung cấp cho bạn đọc kiến thức mới mẻ, vô tận của nhân loại lần đầu được hé mở, cùng những phân tích uyên bác, tiên đoán bất ngờ về hiện tại và tương lai thế giới của những bậc hiền triết thông thái. Đời người tưởng chừng rất dài nhưng lại trôi qua rất nhanh, sinh vượng suy tử, mong manh như sóng nước. Luật nhân quả cực kỳ chính xác, chi tiết, phức tạp được thu thập qua nhiều đời, nhiều kiếp, liên hệ tương hỗ đan xen chặt chữ lẫn nhau, không ai có thể tính được tích đức này có thể trừ được nghiệp kia không, không ai có thể biết được khi nào nhân sẽ trổ quả. Nhưng, một khi đã gây ra nhân thì chắc chắn sẽ gặt quả - luật Nhân quả của vũ trụ trước giờ không bao giờ sai.

    Luật Luân hồi và Nhân quả đã tạo nhân duyên để người này gặp người kia. Gặp nhau có khi là duyên, có khi là nợ; gặp nhau có lúc để trả nợ, có lúc để nối lại duyên xưa. Có biết bao việc diễn ra trong đời, tưởng chừng như là ngẫu nhiên nhưng thật ra đã được sắp đặt từ trước. Luân hồi là một ngôi trường rộng lớn, nơi tất cả con người, tất cả sinh vật đều phải học bài học của riêng mình cho đến khi thật hoàn thiện mới thôi. Nếu không chịu học hay chưa học được trọn vẹn thì buộc phải học lại, chính xác theo quy luật của Nhân quả.

    Thomas đã chia sẻ vì sao đã kể những câu chuyện riêng tư huyền bí này với Giáo sư John Vũ để thực hiện tác phẩm “Muôn kiếp nhân sinh”:

     “Hiện nay thế giới đang trải qua giai đoạn hỗn loạn, xáo trộn, mà thật ra thì mọi quốc gia đều đang gánh chịu những nghiệp quả mà họ đã gây ra trong quá khứ. Mỗi quốc gia, cũng như mọi cá nhân, đều có những nghiệp quả riêng do những nhân mà họ đã gây ra. Cá nhân thì có ‘biệt nghiệp‘ riêng của từng người, nhưng quốc gia thì có ‘cộng nghiệp‘ mà tất cả những người sống trong đó đều phải trả.

    Thường thì con người, khi hành động, ít ai nghĩ đến hậu quả, nhưng một khi hậu quả xảy đến thì họ nghĩ gì, làm gì? Họ oán hận, trách trời, trách đất, trách những người chung quanh đã gây ra những hậu quả đó? Có mấy ai biết chiêm nghiệm, tự trách mình và thay đổi không?

    Tôi mong chúng ta - những cánh bướm bé nhỏ rung động mong manh cũng có thể tạo nên những trận cuồng phong mãnh liệt để thức tỉnh mọi người.

    Tương lai của mỗi con người, mỗi tổ chức, mỗi quốc gia và cả hành tinh này sẽ ra sao trong giai đoạn sắp tới là tùy thuộc vào thái độ ứng xử, nhìn nhận và thức tỉnh của từng cá nhân, từng tổ chức, từng quốc gia đó tạo nên. Nếu muốn thay đổi, cần khởi đầu bằng việc nhận thức, chuyển đổi tâm thức, lan tỏa yêu thương và chia sẻ sự hiểu biết từ mỗi người chúng ta trước.

    Nhân quả đừng đợi thấy mới tin.

    Nhân quả là bảng chỉ đường, giúp con người tìm về thiện lương“

    Cuốn sách được xuất bản bằng tiếng Việt trước khi được chuyển nhượng bản quyền cho các quốc gia khác trên thế giới.

    Về tác giả

    Tác giả Nguyên Phong (Vũ Văn Du) du học ở Mỹ từ năm 1968, tốt nghiệp cao học Sinh vật học, Điện toán. Ông từng là Kỹ sư trưởng, CIO của Tập đoàn Boeing của Mỹ, Viện trưởng Viện Công nghệ Sinh học Đại học Carnegie Mellon. Ông được mọi người biết tới là Giáo sư John Vu – Nhà khoa học uy tín về công nghệ thông tin. , CMMI và từng giảng dạy ở nhiều trường đại học trên thế giới.

     Nguyên Phong là bút danh của bộ sách văn hóa tâm linh được dịch, viết phóng tác từ trải nghiệm, tiềm thức và quá trình nghiên cứu, khám phá các giá trị tinh thần Đông phương. Ông đã viết phóng tác tác phẩm bất hủ Hành trình về Phương Đông năm 24 tuổi (1974). Các tác phẩm khác của Nguyên Phong được bạn đọc nhiều thế hệ yêu thích: Ngọc sáng trong hoa sen, Bên rặng tuyết sơn, Hoa sen trên tuyết, Hoa trôi trên sóng nước, Huyền thuật và các đạo sĩ Tây Tạng, Trở về từ xứ tuyết, Trở về từ cõi sáng, Minh triết trong đời sống, Đường mây qua xứ tuyết, Dấu chân trên cát, Đường mây trong cõi mộng, Đường mây trên đất hoa… và bộ sách dành cho sinh viên, thầy cô: Khởi hành, Kết nối, Bước ra thế giới, Kiến tạo thế hệ Việt Nam ưu việt, GS John Vu và lời khuyên dành cho thầy cô, GS John Vu và lời khuyên dành cho các bậc cha mẹ.

    2. Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 2

    Hiếm có cuốn sách nào ngay từ khi ra mắt đã tạo nên hiện tượng văn hóa đọc và sau nửa năm đã trở thành cuốn sách bán chạy nhất năm 2020 tại Việt Nam như Muôn Kiếp Nhân Sinh. Cơn sốt của cuốn sách này tiếp tục được dấy lên vào dịp Tết Nguyên Đán 2021 khi công ty First News Trí Việt hé lộ đang “ngày đêm thực hiện Muôn Kiếp Nhân Sinh tập 2”. Đáp lại sự mong đợi của độc giả suốt hơn ba tháng, Muôn Kiếp Nhân Sinh tập 2 đã chính thức phát hành trên cả nước.

    Muôn Kiếp Nhân Sinh tập 2 của tác giả Nguyên Phong tiếp tục là những câu chuyện tiền kiếp, nhân quả luân hồi hấp dẫn gắn liền với những kiến giải uyên bác về quá khứ, hiện tại, tương lai của nhân loại và thế giới thông qua góc nhìn của cả khoa học và tâm linh. Chúng ta là ai, chúng ta đến từ đâu và sẽ đi về đâu? Làm cách nào để chữa lành thế giới này, hành tinh này trước những biến cố lớn đang và sẽ diễn ra trong tương lai gần?

    Trong tập 2, hành trình thức tỉnh tâm linh của nhân vật Thomas sẽ dẫn dắt người đọc đến với những tầng cõi năng lượng gắn chặt với thế giới hữu hình của con người thông qua sự vận động của nghiệp lực, nhân quả, để giải thích về thứ năng lượng huyền bí luôn biến chuyển trong chu kỳ bất tận của vũ trụ. Không chỉ là trải nghiệm ly kỳ tại tiền kiếp cổ đại ở Assiria, Hy Lạp, độc giả còn được khám phá hành trình của linh hồn đến những tầng cõi – trạm trung chuyển khác nhau, được xâu chuỗi lại bằng cả triết học, tín ngưỡng, lịch sử và khoa học thế giới từ Đông sang Tây, từ cổ đại đến hiện đại. Năng lượng không tự nhiên sinh ra và cũng không tự nhiên mất đi, sự sống này cũng vậy, khởi đầu và kết thúc - tuy hai mà một, và chỉ có nhân quả sẽ luôn tuần hoàn vận hành bất tận.

    Muôn Kiếp Nhân Sinh tập 2 lý giải rằng vạn vật trên thế giới như cỏ cây, hoa lá, côn trùng, thú vật và con người tuy bề ngoài có vẻ khác biệt nhưng tinh hoa bên trong vẫn là một, đó là sự sống hay năng lượng khởi thủy uyên nguyên. Tinh hoa đó như là “Nước”, còn vạn vật chỉ là “Sóng”. Sóng thì muôn trùng, sóng lớn, sóng nhỏ… nhưng chúng vẫn chỉ là nước. Nếu chân ngã là đại dương thì bản ngã chỉ là nước chứa đựng trong cái chén. Vấn đề là làm sao phá vỡ cái chén để nước trở về với đại dương và đó cũng chính là hành trình của Thomas từ một doanh nhân với niềm tin duy vật hoàn toàn đã từng bước giác ngộ, thức tỉnh để khám phá về luân hồi, nhân quả, chuyển hóa nghiệp quả, chuyển đổi tâm thức và gửi gắm những thông điệp nhân sinh tốt đẹp đến độc giả.

    Tác giả Nguyên Phong chia sẻ trong cuốn sách rằng, mọi việc dù lớn hay nhỏ cũng sẽ góp phần ảnh hưởng trực tiếp đến cuộc sống hiện tại hoặc trong tương lai, thậm chí đến tận kiếp sau. Đó là những nghiệp báo ở kiếp trước cộng nghiệp với hành vi của chúng ta trong kiếp này để hình thành nên bánh xe nghiệp lực khổng lồ phức tạp nhưng lại không bỏ sót bất cứ ai, bất cứ quốc gia nào và không bỏ sót bất cứ hành vi hay tư tưởng nào. Bởi lẽ, chúng ta đều là phần tử của một sự sống vĩ đại thuộc về một năng lượng khởi thuỷ, được sắp đặt khéo léo bởi những định luật trong vũ trụ.

    Bằng những câu chuyện thú vị, sâu sắc, liên kết với nhau một cách chặt chẽ, Muôn Kiếp Nhân Sinh tập 2 sẽ đưa độc giả vào cuộc hành trình trên chuyến tàu thời gian từ phố Wall nước Mỹ đến những cuộc chinh phạt của Alexander Đại Đế, bí ẩn lăng mộ Tần Thủy Hoàng, những cõi giới linh hồn, rồi quay ngược lại cuộc sống đời thường mà bất cứ ai cũng thấy có mình ở trong đó. Để cùng suy ngẫm về những giá trị đẹp đẽ của đời sống. Để nắm lấy những thời khắc còn lại của cuộc đời mình và xoay chuyển số phận, nghiệp lực theo chiều hướng tỉnh thức và nhân ái. Và trên hết, đó là cùng chung tay xây dựng một thế giới tốt đẹp trên nền tảng của yêu thương và chữa lành.

    “Nếu chúng ta có thể cùng nhauchuyển hoá những tư tưởng thù hận, tham lam, íchkỷ bằng những tư tưởng cao thượng, tốt lành; chuyểnhóa các hành động hận thù, giết chóc bằng tình thươngyêu rộng lớn thì mọi việc có thể thay đổi” – trích Muôn Kiếp Nhân Sinh tập 2.

    VỀ TÁC GIẢ:

     Tác giả Nguyên Phong (Vũ Văn Du) du học ở Mỹ từ năm 1968, tốt nghiệp cao học Sinh vật học, Điện toán. Ông từng là Kỹ sư trưởng của Tập đoàn Boeing của Mỹ, Viện trưởng Viện Công nghệ Sinh học Đại học Carnegie Mellon. Ông được mọi người biết tới là Giáo sư John Vu – Nhà khoa học uy tín về công nghệ thông tin. , CMMI và từng giảng dạy ở nhiều trường đại học trên thế giới.

    Nguyên Phong là bút danh của bộ sách văn hóa tâm linh được dịch, viết phóng tác từ trải nghiệm, tiềm thức và quá trình nghiên cứu, khám phá các giá trị tinh thần Đông phương. Ông đã viết phóng tác tác phẩm bất hủ Hành trình về Phương Đông năm 24 tuổi (1974). Các tác phẩm khác của Nguyên Phong được bạn đọc nhiều thế hệ yêu thích: Ngọc sáng trong hoa sen, Bên rặng tuyết sơn, Hoa sen trên tuyết, Hoa trôi trên sóng nước, Huyền thuật và các đạo sĩ Tây Tạng, Trở về từ xứ tuyết, Trở về từ cõi sáng, Minh triết trong đời sống, Đường mây qua xứ tuyết, Dấu chân trên cát, Đường mây trong cõi mộng, Đường mây trên đất hoa… và bộ sách dành cho sinh viên, thầy cô: Khởi hành, Kết nối, Bước ra thế giới, Kiến tạo thế hệ Việt Nam ưu việt, GS John Vu và lời khuyên dành cho thầy cô, GS John Vu và lời khuyên dành cho các bậc cha mẹ.

    Mã hàng	combo-8935086851760-8935086854532
    Dự Kiến Có Hàng	28/02/2023
    Tên Nhà Cung Cấp	FIRST NEWS
    Tác giả	Nguyên Phong
    NXB	Tổng Hợp TPHCM
    Ngôn Ngữ	Tiếng Việt
    Kích Thước Bao Bì	20.5 x 14 cm
    Hình thức	Bìa Mềm
    Sản phẩm hiển thị trong
    Flashsale
    Mã Giảm Giá
    RƯỚC DEAL LINH ĐÌNH VUI ĐÓN TRUNG THU
    Sản phẩm bán chạy nhất	Top 100 sản phẩm Khoa học khác bán chạy của tháng
    Giá sản phẩm trên Fahasa.com đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ phí đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...
    Combo Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 1 & Tập 2 (Bộ 2 Tập)

    1. Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 1

    Giáo sư John Vũ – Nguyên Phong và những câu chuyện chưa từng có về tiền kiếp, khám phá luật Nhân quả, Luân hồi.

    “Muôn kiếp nhân sinh” là tác phẩm do Giáo sư John Vũ - Nguyên Phong viết từ năm 2017 và hoàn tất đầu năm 2020 ghi lại những câu chuyện, trải nghiệm tiền kiếp kỳ lạ từ nhiều kiếp sống của người bạn tâm giao lâu năm, ông Thomas – một nhà kinh doanh tài chính nổi tiếng ở New York. Những câu chuyện chưa từng tiết lộ này sẽ giúp mọi người trên thế giới chiêm nghiệm, khám phá các quy luật về luật Nhân quả và Luân hồi của vũ trụ giữa lúc trái đất đang gặp nhiều tai ương, biến động, khủng hoảng từng ngày.

    “Muôn kiếp nhân sinh” là một bức tranh lớn với vô vàn mảnh ghép cuộc đời, là một cuốn phim đồ sộ, sống động về những kiếp sống huyền bí, trải dài từ nền văn minh Atlantis hùng mạnh đến vương quốc Ai Cập cổ đại của các Pharaoh quyền uy, đến Hợp Chủng Quốc Hoa Kỳ ngày nay.

    “Muôn kiếp nhân sinh”cung cấp cho bạn đọc kiến thức mới mẻ, vô tận của nhân loại lần đầu được hé mở, cùng những phân tích uyên bác, tiên đoán bất ngờ về hiện tại và tương lai thế giới của những bậc hiền triết thông thái. Đời người tưởng chừng rất dài nhưng lại trôi qua rất nhanh, sinh vượng suy tử, mong manh như sóng nước. Luật nhân quả cực kỳ chính xác, chi tiết, phức tạp được thu thập qua nhiều đời, nhiều kiếp, liên hệ tương hỗ đan xen chặt chữ lẫn nhau, không ai có thể tính được tích đức này có thể trừ được nghiệp kia không, không ai có thể biết được khi nào nhân sẽ trổ quả. Nhưng, một khi đã gây ra nhân thì chắc chắn sẽ gặt quả - luật Nhân quả của vũ trụ trước giờ không bao giờ sai.

    Luật Luân hồi và Nhân quả đã tạo nhân duyên để người này gặp người kia. Gặp nhau có khi là duyên, có khi là nợ; gặp nhau có lúc để trả nợ, có lúc để nối lại duyên xưa. Có biết bao việc diễn ra trong đời, tưởng chừng như là ngẫu nhiên nhưng thật ra đã được sắp đặt từ trước. Luân hồi là một ngôi trường rộng lớn, nơi tất cả con người, tất cả sinh vật đều phải học bài học của riêng mình cho đến khi thật hoàn thiện mới thôi. Nếu không chịu học hay chưa học được trọn vẹn thì buộc phải học lại, chính xác theo quy luật của Nhân quả.

    Thomas đã chia sẻ vì sao đã kể những câu chuyện riêng tư huyền bí này với Giáo sư John Vũ để thực hiện tác phẩm “Muôn kiếp nhân sinh”:

     “Hiện nay thế giới đang trải qua giai đoạn hỗn loạn, xáo trộn, mà thật ra thì mọi quốc gia đều đang gánh chịu những nghiệp quả mà họ đã gây ra trong quá khứ. Mỗi quốc gia, cũng như mọi cá nhân, đều có những nghiệp quả riêng do những nhân mà họ đã gây ra. Cá nhân thì có ‘biệt nghiệp‘ riêng của từng người, nhưng quốc gia thì có ‘cộng nghiệp‘ mà tất cả những người sống trong đó đều phải trả.

    Thường thì con người, khi hành động, ít ai nghĩ đến hậu quả, nhưng một khi hậu quả xảy đến thì họ nghĩ gì, làm gì? Họ oán hận, trách trời, trách đất, trách những người chung quanh đã gây ra những hậu quả đó? Có mấy ai biết chiêm nghiệm, tự trách mình và thay đổi không?

    Tôi mong chúng ta - những cánh bướm bé nhỏ rung động mong manh cũng có thể tạo nên những trận cuồng phong mãnh liệt để thức tỉnh mọi người.

    Tương lai của mỗi con người, mỗi tổ chức, mỗi quốc gia và cả hành tinh này sẽ ra sao trong giai đoạn sắp tới là tùy thuộc vào thái độ ứng xử, nhìn nhận và thức tỉnh của từng cá nhân, từng tổ chức, từng quốc gia đó tạo nên. Nếu muốn thay đổi, cần khởi đầu bằng việc nhận thức, chuyển đổi tâm thức, lan tỏa yêu thương và chia sẻ sự hiểu biết từ mỗi người chúng ta trước.

    Nhân quả đừng đợi thấy mới tin.

    Nhân quả là bảng chỉ đường, giúp con người tìm về thiện lương“

    Cuốn sách được xuất bản bằng tiếng Việt trước khi được chuyển nhượng bản quyền cho các quốc gia khác trên thế giới.

    Về tác giả

    Tác giả Nguyên Phong (Vũ Văn Du) du học ở Mỹ từ năm 1968, tốt nghiệp cao học Sinh vật học, Điện toán. Ông từng là Kỹ sư trưởng, CIO của Tập đoàn Boeing của Mỹ, Viện trưởng Viện Công nghệ Sinh học Đại học Carnegie Mellon. Ông được mọi người biết tới là Giáo sư John Vu – Nhà khoa học uy tín về công nghệ thông tin. , CMMI và từng giảng dạy ở nhiều trường đại học trên thế giới.

     Nguyên Phong là bút danh của bộ sách văn hóa tâm linh được dịch, viết phóng tác từ trải nghiệm, tiềm thức và quá trình nghiên cứu, khám phá các giá trị tinh thần Đông phương. Ông đã viết phóng tác tác phẩm bất hủ Hành trình về Phương Đông năm 24 tuổi (1974). Các tác phẩm khác của Nguyên Phong được bạn đọc nhiều thế hệ yêu thích: Ngọc sáng trong hoa sen, Bên rặng tuyết sơn, Hoa sen trên tuyết, Hoa trôi trên sóng nước, Huyền thuật và các đạo sĩ Tây Tạng, Trở về từ xứ tuyết, Trở về từ cõi sáng, Minh triết trong đời sống, Đường mây qua xứ tuyết, Dấu chân trên cát, Đường mây trong cõi mộng, Đường mây trên đất hoa… và bộ sách dành cho sinh viên, thầy cô: Khởi hành, Kết nối, Bước ra thế giới, Kiến tạo thế hệ Việt Nam ưu việt, GS John Vu và lời khuyên dành cho thầy cô, GS John Vu và lời khuyên dành cho các bậc cha mẹ.

    2. Muôn Kiếp Nhân Sinh - Many Times, Many Lives - Tập 2

    Hiếm có cuốn sách nào ngay từ khi ra mắt đã tạo nên hiện tượng văn hóa đọc và sau nửa năm đã trở thành cuốn sách bán chạy nhất năm 2020 tại Việt Nam như Muôn Kiếp Nhân Sinh. Cơn sốt của cuốn sách này tiếp tục được dấy lên vào dịp Tết Nguyên Đán 2021 khi công ty First News Trí Việt hé lộ đang “ngày đêm thực hiện Muôn Kiếp Nhân Sinh tập 2”. Đáp lại sự mong đợi của độc giả suốt hơn ba tháng, Muôn Kiếp Nhân Sinh tập 2 đã chính thức phát hành trên cả nước.

    Muôn Kiếp Nhân Sinh tập 2 của tác giả Nguyên Phong tiếp tục là những câu chuyện tiền kiếp, nhân quả luân hồi hấp dẫn gắn liền với những kiến giải uyên bác về quá khứ, hiện tại, tương lai của nhân loại và thế giới thông qua góc nhìn của cả khoa học và tâm linh. Chúng ta là ai, chúng ta đến từ đâu và sẽ đi về đâu? Làm cách nào để chữa lành thế giới này, hành tinh này trước những biến cố lớn đang và sẽ diễn ra trong tương lai gần?

    Trong tập 2, hành trình thức tỉnh tâm linh của nhân vật Thomas sẽ dẫn dắt người đọc đến với những tầng cõi năng lượng gắn chặt với thế giới hữu hình của con người thông qua sự vận động của nghiệp lực, nhân quả, để giải thích về thứ năng lượng huyền bí luôn biến chuyển trong chu kỳ bất tận của vũ trụ. Không chỉ là trải nghiệm ly kỳ tại tiền kiếp cổ đại ở Assiria, Hy Lạp, độc giả còn được khám phá hành trình của linh hồn đến những tầng cõi – trạm trung chuyển khác nhau, được xâu chuỗi lại bằng cả triết học, tín ngưỡng, lịch sử và khoa học thế giới từ Đông sang Tây, từ cổ đại đến hiện đại. Năng lượng không tự nhiên sinh ra và cũng không tự nhiên mất đi, sự sống này cũng vậy, khởi đầu và kết thúc - tuy hai mà một, và chỉ có nhân quả sẽ luôn tuần hoàn vận hành bất tận.

    Muôn Kiếp Nhân Sinh tập 2 lý giải rằng vạn vật trên thế giới như cỏ cây, hoa lá, côn trùng, thú vật và con người tuy bề ngoài có vẻ khác biệt nhưng tinh hoa bên trong vẫn là một, đó là sự sống hay năng lượng khởi thủy uyên nguyên. Tinh hoa đó như là “Nước”, còn vạn vật chỉ là “Sóng”. Sóng thì muôn trùng, sóng lớn, sóng nhỏ… nhưng chúng vẫn chỉ là nước. Nếu chân ngã là đại dương thì bản ngã chỉ là nước chứa đựng trong cái chén. Vấn đề là làm sao phá vỡ cái chén để nước trở về với đại dương và đó cũng chính là hành trình của Thomas từ một doanh nhân với niềm tin duy vật hoàn toàn đã từng bước giác ngộ, thức tỉnh để khám phá về luân hồi, nhân quả, chuyển hóa nghiệp quả, chuyển đổi tâm thức và gửi gắm những thông điệp nhân sinh tốt đẹp đến độc giả.

    Tác giả Nguyên Phong chia sẻ trong cuốn sách rằng, mọi việc dù lớn hay nhỏ cũng sẽ góp phần ảnh hưởng trực tiếp đến cuộc sống hiện tại hoặc trong tương lai, thậm chí đến tận kiếp sau. Đó là những nghiệp báo ở kiếp trước cộng nghiệp với hành vi của chúng ta trong kiếp này để hình thành nên bánh xe nghiệp lực khổng lồ phức tạp nhưng lại không bỏ sót bất cứ ai, bất cứ quốc gia nào và không bỏ sót bất cứ hành vi hay tư tưởng nào. Bởi lẽ, chúng ta đều là phần tử của một sự sống vĩ đại thuộc về một năng lượng khởi thuỷ, được sắp đặt khéo léo bởi những định luật trong vũ trụ.

    Bằng những câu chuyện thú vị, sâu sắc, liên kết với nhau một cách chặt chẽ, Muôn Kiếp Nhân Sinh tập 2 sẽ đưa độc giả vào cuộc hành trình trên chuyến tàu thời gian từ phố Wall nước Mỹ đến những cuộc chinh phạt của Alexander Đại Đế, bí ẩn lăng mộ Tần Thủy Hoàng, những cõi giới linh hồn, rồi quay ngược lại cuộc sống đời thường mà bất cứ ai cũng thấy có mình ở trong đó. Để cùng suy ngẫm về những giá trị đẹp đẽ của đời sống. Để nắm lấy những thời khắc còn lại của cuộc đời mình và xoay chuyển số phận, nghiệp lực theo chiều hướng tỉnh thức và nhân ái. Và trên hết, đó là cùng chung tay xây dựng một thế giới tốt đẹp trên nền tảng của yêu thương và chữa lành.

    “Nếu chúng ta có thể cùng nhauchuyển hoá những tư tưởng thù hận, tham lam, íchkỷ bằng những tư tưởng cao thượng, tốt lành; chuyểnhóa các hành động hận thù, giết chóc bằng tình thươngyêu rộng lớn thì mọi việc có thể thay đổi” – trích Muôn Kiếp Nhân Sinh tập 2.

    VỀ TÁC GIẢ:

     Tác giả Nguyên Phong (Vũ Văn Du) du học ở Mỹ từ năm 1968, tốt nghiệp cao học Sinh vật học, Điện toán. Ông từng là Kỹ sư trưởng của Tập đoàn Boeing của Mỹ, Viện trưởng Viện Công nghệ Sinh học Đại học Carnegie Mellon. Ông được mọi người biết tới là Giáo sư John Vu – Nhà khoa học uy tín về công nghệ thông tin. , CMMI và từng giảng dạy ở nhiều trường đại học trên thế giới.

    Nguyên Phong là bút danh của bộ sách văn hóa tâm linh được dịch, viết phóng tác từ trải nghiệm, tiềm thức và quá trình nghiên cứu, khám phá các giá trị tinh thần Đông phương. Ông đã viết phóng tác tác phẩm bất hủ Hành trình về Phương Đông năm 24 tuổi (1974). Các tác phẩm khác của Nguyên Phong được bạn đọc nhiều thế hệ yêu thích: Ngọc sáng trong hoa sen, Bên rặng tuyết sơn, Hoa sen trên tuyết, Hoa trôi trên sóng nước, Huyền thuật và các đạo sĩ Tây Tạng, Trở về từ xứ tuyết, Trở về từ cõi sáng, Minh triết trong đời sống, Đường mây qua xứ tuyết, Dấu chân trên cát, Đường mây trong cõi mộng, Đường mây trên đất hoa… và bộ sách dành cho sinh viên, thầy cô: Khởi hành, Kết nối, Bước ra thế giới, Kiến tạo thế hệ Việt Nam ưu việt, GS John Vu và lời khuyên dành cho thầy cô, GS John Vu và lời khuyên dành cho các bậc cha mẹ.`,
    code: '	8935086854532',
    coverForm: 'Bìa Mềm',
    coverType: 'Bìa Mềm',
    coverUrl:
      'https://cdn0.fahasa.com/media/catalog/product/o/n/one-punch-man---tap-23---that---gia.jpg',
    height: 20.5,
    width: 14,
    language: 'Tiếng Việt',
    numOfPages: 125,
    price: 429460,
    publisher: 'Tổng Hợp TPHCM',
    supplier: 'FIRST NEWS',
    weight: 256,
  },
];

const userList: CreateUserDto[] = [
  {
    email: 'vuthanhha.2001@gmail.com',
    name: 'hahunavth',
    password: '123456789',
    role: 'ADMIN',
    gender: 'MALE',
    phone: '098765321',
  },
];

async function main() {
  const nUser = await prisma.user.count();
  if (nUser == 0) {
    await prisma.user.createMany({ data: userList });
  }

  const nBook = await prisma.book.count();
  if (nBook == 0) {
    await prisma.book.createMany({ data: bookList });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
