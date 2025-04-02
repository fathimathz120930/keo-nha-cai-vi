import React, { useState, useEffect } from 'react';
import { Sun, Moon, Trophy, Target, AlertTriangle, BookOpen } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <header className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-40">
        <div className="flex items-center gap-3">
        <img src="https://keo-nha-cai-vi.vercel.app/8xbet_light_ logo.svg" alt=" Logo" className="w-30 h-30" />
          
          
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

      <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Cách Đọc Kèo Nhà Cái Dành Cho Người Mới Bắt Đầu
          </h1>

          <div className="relative rounded-xl overflow-hidden mb-12">
            <img
              src="https://keo-nha-cai-vi.vercel.app/cach-doc-keo-nha-cai-danh-cho-nguoi-moi-bat-dau.webp"
              alt="cach-doc-keo-nha-cai-danh-cho-nguoi-moi-bat-dau
"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              
            </div>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
            <p className="text-dark p-6 text-lg font-medium">
                Kèo nhà cái trên các sàn giao dịch nhà cái 8xbet luôn thay đổi một cách đa dạng và phức tạp. Để có thể tham gia cá cược một cách hiệu quả và an toàn, việc hiểu rõ cách đọc kèo là điều vô cùng thiết thực đối với hội viên hiện nay.
              </p>
              <p className="text-dark p-6 text-lg font-medium">
               Bài viết ngay sau đây sẽ là người bạn đồng hành giúp cho bạn khám phá thế giới kèo cược rộng lớn này một cách dễ dàng và thú vị nhất.

              </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Vai trò của kèo nhà cái
          </h2>
            <div className="flex items-center gap-3 mb-4">
          
              

            
              <h2 className="text-2xl font-bold"></h2>
               <img
              src="https://keo-nha-cai-vi.vercel.app/vai-tro-cua-keo-nha-cai-can-nam-ro.webp"
              alt="cach-doc-keo-nha-cai-danh-cho-nguoi-moi-bat-dau
"
              className="w-full h-[400px] object-cover"
            />
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
              Trong thế giới cá cược thể thao đa dạng hiện nay, kèo nhà cái đóng vai trò như một ngôn ngữ chung. Nói một cách đơn giản thì kèo cược này là những tỷ lệ cược mà đơn vị đưa ra cho từng trận đấu, từng sự kiện thể thao khác nhau. Nó sẽ là công cụ giúp người chơi dự đoán kết quả và đặt tiền vào lựa chọn tốt nhất của mình.

            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kèo cược nhà cái là yếu tố quyết định trực tiếp đến kết quả cá cược của người chơi. Chính vì thế, vai trò mà nó mang lại cực kỳ quan trọng:


            </p>

             <ul className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Phản ánh sự đánh giá của cổng game về khả năng thắng - thua của từng đội tuyển, từng giải đấu.
</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Kèo cá cược có tác dụng thu hút người chơi đến tham gia tận hưởng mỗi ngày bởi tỷ lệ cược vô cùng hấp dẫn.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Với đa dạng các tỷ lệ kèo biến động không ngừng, trận đấu sẽ ngày càng kịch tính, gay cấn hơn, từ đó làm tăng trải nghiệm của thành viên.
</span>
              </li>
            </ul>
            
          </section>

          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
           
            Chi tiết cách đọc các loại kèo nhà cái 8xbet phổ biến

          </h2>
           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Kèo cá cược bóng đá 8xbet là một trong những yếu tố làm nên sự hấp dẫn của môn thể thao vua tại đơn vị này. Trong đó, kèo châu Á, kèo châu Âu và kèo cược tài xỉu được xem là ba loại kèo vào tiền phổ biến nhất:



            </p>

          <div className="grid gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-xl mb-3">Kèo châu Á (Handicap)</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Đây là loại kèo cá độ được người tham gia ưa chuộng nhất, thể loại kèo này chủ yếu tạo ra sự cân bằng giữa hai đội bóng có trình độ chênh lệch. Đầu tiên, nhà cái sẽ đưa ra một tỷ lệ chấp (ví dụ như đội A chấp đội B 1 trái bóng), nghĩa là cuối trận đội A phải thắng với cách biệt 2 bàn trở lên thì bet thủ đặt cược cho đội A mới giành được tiền thắng.

              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Các loại kèo châu Á phổ biến hiện nay bao gồm:


              </p>

               <ul className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4">
           
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Kèo đồng banh (không có đội nào chấp)
</span>
              </li>
                 
                  <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Kèo nửa trái (chấp 0.5 trái)
</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Kèo 1 trái

</span>
              </li>
                  <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Kèo 1.5 trái (1 trái banh rưỡi),...

</span>
              </li>
            </ul>


<h3 className="font-bold text-xl mb-3 mt-2">Kèo châu Âu (1x2)
</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Loại kèo cá cược này thì đơn giản hơn, chỉ có 3 kết quả có thể xảy ra trong trận đấu đó là đội chủ nhà thắng (1), hòa nhau (X) hoặc đội khách chiến thắng (2). Người tham gia chỉ cần dự đoán xem đội nào sẽ giành chiến thắng hoặc trận đấu kết thúc với tỷ lệ hòa. Tỷ lệ kèo châu Âu thường được thể hiện dưới dạng phân số hoặc là số thập phân.


              </p>
             <p className="text-gray-700 dark:text-gray-300">
              Ví dụ: Tỷ lệ kèo châu Âu trong trận đấu giữa đội A và đội B là 2.00 - 3.50 - 3.00, nghĩa là nếu bạn đặt cược 100.000 đồng vào đội A thắng và đội A thắng thật, bạn sẽ nhận được 200.000 đồng.


              </p>

<h3 className="font-bold text-xl mb-3 mt-2">Kèo tài xỉu
</h3>

<p className="text-gray-700 dark:text-gray-300 mb-2">
                Loại kèo cược 8xbet này liên quan đến tổng số bàn thắng được ghi trong suốt một trận đấu. Nhà cái trực tuyến uy tín sẽ đưa ra một con số cụ thể, tiếp theo hội viên sẽ dự đoán tổng số bàn thắng có lớn hơn hay nhỏ hơn con số được ấn định đó.



              </p>
             <p className="text-gray-700 dark:text-gray-300">
              Ví dụ: Kèo tài xỉu có tỷ số được đưa ra là 2.5, nếu người chơi đặt tài và tổng số bàn thắng là 3 bàn trở lên thì bạn giành được chiến thắng.



              </p>
               <div className="max-w-4xl mx-auto py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center my-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Lưu ý dành cho tân binh khi đọc kèo nhà cái 8xbet
          </h2>
    </div>
            

  <div className="flex items-center gap-3 mb-4">
          
              
   
              
               <img
              src="https://keo-nha-cai-vi.vercel.app/nhung-luu-y-khi-doc-keo-nha-cai-8xbet.webp"
              alt="Lưu ý dành cho tân binh khi đọc kèo nhà cái 8xbet

"
              className="w-full h-[400px] object-cover"
            />
            </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Để tăng cơ hội giành lấy chiến thắng và giảm thiểu đi các rủi ro khi tham gia cá cược các loại kèo nhà cái phổ biến tại đơn vị hiện nay, bet thủ cần phải lưu ý một số điểm quan trọng sau đây:




              </p>
              


<h3 className="font-bold text-xl mb-3 mt-2">Tìm hiểu kỹ càng về các loại kèo nhà cái 8xbet
</h3>

<p className="text-gray-700 dark:text-gray-300 mb-2">
               Trước khi tham gia đặt cược, bet thủ cần dành ra một số chút thời gian quý báu để nghiên cứu về các loại kèo cược tại đơn vị. Theo đó, bạn cần hiểu rõ về chúng, cách đọc, xem xét những yếu tố liên quan có thể ảnh hưởng đến kết quả tỷ lệ kèo,... Từ đó, bạn có thể phân tích và chọn ra những loại kèo phù hợp nhất với trận đấu mà mình đang chơi.




              </p>
              <h3 className="font-bold text-xl mb-3 mt-2">Phân tích kỹ càng toàn bộ thông tin trận đấu

</h3>

<p className="text-gray-700 dark:text-gray-300 mb-2">
               Việc thu thập và phân tích những nguồn thông tin chi tiết về các đội bóng 8xbet là cũng là yếu tố quyết định đến khả năng thắng cược của thành viên. Theo đó, người chơi nên tìm hiểu kỹ về phong độ của từng đội tuyển, đội hình ra trận, lịch sử đối đầu trước đó, những yếu tố liên quan đến sân nhà và sân khách, thời tiết,... Những nội dung này sẽ giúp cho bạn nắm rõ tường tận về giải đấu và có cho mình sự lựa chọn kèo cược thích hợp.





              </p>
              <h3 className="font-bold text-xl mb-3 mt-2">Quản lý vốn cược bóng đá nhà cái một cách hiệu quả


</h3>

<p className="text-gray-700 dark:text-gray-300 mb-2">
               Nếu muốn tham gia cá cược lâu dài, bạn cần phải có một khoản tiền đủ dùng, khoản tiền này chính là nguồn vốn mà bạn tích góp được qua nhiều trận đấu khốc liệt tại đơn vị. Chính vì thế, bạn cần phải biết cách quản lý nguồn tài chính của bản thân bằng cách đặt ra giới hạn sử dụng tiền cược trong mỗi trận đấu. Nếu như vượt quá giới hạn đó, bạn cần phải dừng lại ngay lập tức để tránh một số rủi ro không đáng có.






              </p>

              <h3 className="font-bold text-xl mb-3 mt-2">Kiểm soát được tâm trạng kèm theo cảm xúc
</h3>

<p className="text-gray-700 dark:text-gray-300 mb-2">
               Cảm xúc cũng là một yếu tố ảnh hưởng lớn đến khả năng thắng thua cược của người chơi. Nói như thế là bởi vì, đặt cược lúc bản thân cảm thấy buồn bã, tức giận hoặc quá phấn khởi sẽ khiến cho quyết định của bạn trở nên không khách quan. Lúc này là thời điểm bạn dễ bị nhầm lẫn và đưa ra những sự lựa chọn sai lầm dẫn đến khả năng thua lỗ lớn.






              </p>




               <h3 className="font-bold text-xl mb-3 mt-2">Tham khảo ý kiến của cao thủ 8xbet</h3>

<p className="text-gray-700 dark:text-gray-300 mb-2">
               Nếu như bạn là một tân thủ mới bắt đầu tham gia cá độ tại nhà cái trực tuyến 8xbet, bạn có thể tìm kiếm sự tư vấn từ những thành viên đã có kinh nghiệm dày dặn trong lĩnh vực cá độ. Họ là những chuyên gia, cao thủ giúp cho bạn có được những vốn kiến thức cực kỳ quý báu, giúp cho bạn nâng cao khả năng chơi của mình ngày một tốt hơn.




              </p>



              <p className="text-gray-700 dark:text-gray-300 mb-2">
             






              </p>












              

              
            </div>
            
            
          </div>

   

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
           
            <p className="mb-6">
              Bài viết trên đã chia sẻ đến bạn đọc trọn vẹn cách đọc những loại <strong>kèo nhà cái </strong>phổ biến tại <strong>8xbet</strong>. Nếu là một tân thủ mới tham gia vào cuộc vui, thì bạn hãy áp dụng những kiến thức trên làm nền tảng để có được chuyến hành trình cá cược thú vị hơn mỗi ngày nhé!


            </p>
           
          </div>
        </div>





      </main>



          <section>
<div>
  <footer className="fixed px-6 py-4 bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md z-40 w-full">
  <div className="flex items-center gap-5">
    <img src="https://8xbet-xo-so-vi.vercel.app/8xbet_light_ logo.svg" alt="Logo" className="w-30 h-30" />
  </div>
  <div className="ml-auto text-sm text-gray-600 dark:text-gray-300">
    © 2025 <a href="https://8xbet-xo-so-vi.vercel.app/" className="text-blue-600 hover:underline">8xbet</a>. All rights reserved.
  </div>
</footer>
  </div>
</section>



    </div>
  );
}

export default App;
