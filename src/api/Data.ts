
import { Images } from '../utils/images/Images' 
import { DataType,JobType,NewsType} from '../types/index'
 

export const PartnerData: string[] = [Images.doitac1Image, Images.doitac2Image, Images.doitac3Image, Images.doitac4Image, Images.doitac4Image]
export const DataService = [
    {
        title: 'Chuyên nghiệp thật',
        description: 'Đối với người dùng nhiều hơn',
        content1: 'Dành cho nhóm nhỏ - 15 người dùng',
        content2: 'Hỗ trợ cá nhân',
        content3: 'Dữ liệu cá nhân - 60GB',
        content4: 'Dành cho các nhóm lớn - Không giới hạn',
        content5: 'Lịch sử dữ liệu',
    },
    {
        title: 'Người bắt đầu',
        description: 'Kế hoạch thử nghiệm cho người mới bắt đầu',
        content1: 'Sự đóng góp của công đồng',
        content2: 'Dữ liệu cá nhân - 20 GB',
        content3: 'Dữ liệu cá nhân - 60GB',
        content4: 'Hỗ trợ cá nhân',
        content5: 'Dành cho các nhóm lớn - Không giới hạn',
    },
    {
        title: 'Tổ chức',
        description: 'Giải pháp tốt nhát cho Pro',
        content1: 'Dành cho các nhóm lớn - Không giới hạn',
        content2: 'Hỗ trợ cá nhân',
        content3: 'Dữ liệu cá nhân - Không giới hạn',
        content4: 'Lịch sử dữ liệu',
        content5: 'Hỗ trợ cá nhân',
    },
    {
        title: 'Tổ chức',
        description: 'Giải pháp tốt nhát cho Pro',
        content1: 'Dành cho các nhóm lớn - Không giới hạn',
        content2: 'Hỗ trợ cá nhân',
        content3: 'Dữ liệu cá nhân - Không giới hạn',
        content4: 'Lịch sử dữ liệu',
        content5: 'Hỗ trợ cá nhân',
    },
]
export const DataDifferentAndPioneer = [
    {
        img: Images.Image01,
        title: `Tư duy phát triển\nsản phẩm`,
        description: "Tất cả thành viên đều được cung cấp đầy đủ công cụ và tài nguyên số để phục vụ cho công việc.",
    },
    {
        img: Images.Image02,
        title: `Khả năng tích hợp\nvà mở rộng`,
        description: "Cung cấp các giải pháp, mở rộng thêm phần mềm theo yêu cầu của doanh nghiệp.",
    },
    {
        img: Images.Image03,
        title: `Khả năng tùy biến\nvà tự động`,
        description: "Battech luôn nghiên cứu đặc thù khác nhau của từng doanh nghiệp để đưa ra lời giải cho bài toán tổng quát.",
    },
    {
        img: Images.Image04,
        title: `Chi phí hợp lý\nvà linh hoạt`,
        description: "Khách hàng chỉ chi trả cho những dịch vụ mình sử dụng. Cam kết không phát sinh thêm các khoản phụ thu.",
    },
]
export const DataWorkingPrinciple = [
    {
        img: Images.Image5,
        title: 'Teamwork',
        description: 'Tinh thần đồng đội - mỗi cá nhân nhỏ tập hợp gắn kết, nâng đỡ đoàn kết vì mục tiêu chung xây dựng công ty phát triển vững mạnh.',
    },
    {
        img: Images.Image6,
        title: 'Trust',
        description: 'Tin cậy - giữ chữ tín, giữ đúng lời hứa.',
    },
    {
        img: Images.Image7,
        title: 'Innovation',
        description: 'Sáng tạo, đổi mới - luôn học tập trao đổi cập nhật kiến thức mới để đưa vào ứng dụng trong công việc, luôn cải tiến áp dụng những công nghệ mới nhất để tạo ra sản phẩm tốt nhất.',
    },
    {
        img: Images.Image8,
        title: 'Ethics',
        description: 'Đạo đức - trung thực khi phục vụ khách hàng, hiểu và tuân thủ các quy định của công ty, trách nhiệm với công việc, bình đẳng và tôn trọng mọi người.',
    },
    {
        img: Images.Image9,
        title: 'Customers',
        description: 'Khách hàng - đặt khách hàng là trung tâm phát triển, Battech luôn sẵn sàng lắng nghe và thay đổi theo chiều hướng tích cực để đưa ra sản phẩm phù hợp',
    },
    {
        img: Images.Image10,
        title: 'Goals',
        description: 'Mục tiêu - hoàn thành sản phẩm phòng họp ảo và đưa ra thị trường. Được các doanh nghiệp lớn tin cậy sử dụng rộng rãi.',
    },
]

export const fakeDataJob: JobType[] = [
    {
        id: '1',
        title: 'Product Design',
        description: 'Product Designer (Commercial)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hồ Chí Minh",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Thực hiện các dự án UI/UX',
            description2: 'Thiết kế Website, App trong lĩnh vực thương mại điện tử, ERP',
            description3: 'Tạo bản phác thảo, wireframe và prototype để trình bày ý tưởng thiết kế',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Các công việc khác theo yêu cầu của quản lý.',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Có từ 5 năm kinh nghiệm trở lên phát triển ứng dụng di động (React Native)',
            request2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '2',
        title: 'Thực tập Frontend(Fulltime)',
        description: 'Executive, Onsite Merchandise - Automatives',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Rà soát, kiểm tra các tài liệu thiết kế, tài liệu hướng dẫn, tài liệu chung của Công ty, đảm bảo đáp ứng đầy đủ, chính xác về yêu cầu nghiệp vụ',
            description5: ' Viết/cập nhật các tài liệu URD, FSD. Sign-off tài liệu với các bên liên quann',
            description6: ' Trao đổi, làm rõ yêu cầu, kết hợp khảo sát, phân tích các quy',
        },
        candidateRequirements: {
            request1: ' Phân tích yêu cầu nghiệp vụ',
            request2: 'Phân tích hệ thống và đề xuất giải pháp',
            request3: 'Phát triển business requirement specifications (BRS)',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Có kinh nghiệm sử dụng ký hiệu mô hình hóa như UML, CASE, ER,',
        }
    }, {
        id: '3',
        title: 'Business Analyst (Odoo)',
        description: 'Data Analyst (Pricing)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Chi tiết công việc trao đổi trong quá trình phỏng vấn',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Sinh viên năm cuối ngành CNTT hoặc đã tốt nghiệp',
            request2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '4',
        title: 'Business Development',
        description: 'Sales Executive (Cross Border-Chinese Speaking)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Rà soát, kiểm tra các tài liệu thiết kế, tài liệu hướng dẫn, tài liệu chung của Công ty, đảm bảo đáp ứng đầy đủ, chính xác về yêu cầu nghiệp vụ',
            description5: ' Viết/cập nhật các tài liệu URD, FSD. Sign-off tài liệu với các bên liên quann',
            description6: ' Trao đổi, làm rõ yêu cầu, kết hợp khảo sát, phân tích các quy',
        },
        candidateRequirements: {
            request1: ' Phân tích yêu cầu nghiệp vụ',
            request2: 'Phân tích hệ thống và đề xuất giải pháp',
            request3: 'Phát triển business requirement specifications (BRS)',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Có kinh nghiệm sử dụng ký hiệu mô hình hóa như UML, CASE, ER,',
        }
    },
    {
        id: '5',
        title: 'Lập trình viên React Native',
        description: 'Product Designer (Commercial)',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Có từ 5 năm kinh nghiệm trở lên phát triển ứng dụng di động (React Native)',
            description2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            description3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Sinh viên từ năm cuối hoặc vừa tốt nghiệp chuyên ngành thiết kế đồ họa.',
            request2: 'Đi làm fulltime (cho phép nghỉ tối đa 2 buổi/ tuần để lên trường nếu việc học yêu cầu)',
            request3: 'Biết sử dụng các phần mềm như: Figma, Adobe XD,  Adobe',
            request4: 'Photoshop, Adobe Illustrator, Adobe Premiere, Adobe After Effects.',
            request5: 'Có tính sáng tạo cao, thẩm mỹ tinh tế, hiện đại',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '6',
        title: 'Thực tập sinh Python',
        description: 'Executive, Onsite Merchandise - Automatives',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Phát triển ứng dụng ODOO (phát triển và tùy chỉnh module mới).',
            description2: 'Sử dụng lại các tính năng có sẵn trong ODOO.',
            description3: 'Tạo mô-đun tùy chỉnh trong ODOO để đáp ứng yêu cầu cụ thể.',
            description4: 'Tham gia vào các dự án phát triển các sản phẩm, dịch vụ.',
            description5: 'Phát triển các ứng dụng / tính năng vận hành doanh nghiệp hàng ngày.',
            description6: 'Thực hiện các công việc khác theo yêu cầu của TBP',
        },
        candidateRequirements: {
            request1: 'Sinh viên năm cuối ngành CNTT',
            request2: 'Đi làm fulltime (cho phép nghỉ tối đa 2 buổi/ tuần để lên trường nếu việc học yêu cầu)',
            request3: 'Có kiến thức về Python, có hiểu biết về Odoo là lợi thế',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    }, {
        id: '7',
        title: 'Lập trình Website',
        description: 'Data Analyst (Pricing)',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: ' Lập trình web theo thiết kế UX/UI trên Figma hoặc file .psd',
            description2: 'Tham gia phát triển các dự án về web, xây dựng các chức năng cho website đáp ứng đa nền tảng PC, Smartphone, Tablet',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Phối hợp với bộ phận SEO Web, Marketing Online tối ưu hóa website theo tiêu chuẩn SEO và có khả năng tự cập nhật các chuẩn SEO, các thuật toán mới nhất của Google.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: ' Phối hợp và hỗ trợ bộ phận thiết kế để tối ưu giao diện Website, hiển thị cho các sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Ưu tiên đã từng làm việc với các Frontend Framework như ReactJS',
        }
    },
    {
        id: '8',
        title: 'Business Development',
        description: 'Sales Executive (Cross Border-Chinese Speaking)',
        address: 'Hồ Chí Minh',
        group: "Backend",
        location: "Hồ Chí Minh",
        type: "Bán thời gian",
        jobDescription: {
            description1: ' Lập trình web theo thiết kế UX/UI trên Figma hoặc file .psd',
            description2: 'Tham gia phát triển các dự án về web, xây dựng các chức năng cho website đáp ứng đa nền tảng PC, Smartphone, Tablet',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Phối hợp với bộ phận SEO Web, Marketing Online tối ưu hóa website theo tiêu chuẩn SEO và có khả năng tự cập nhật các chuẩn SEO, các thuật toán mới nhất của Google.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: ' Phối hợp và hỗ trợ bộ phận thiết kế để tối ưu giao diện Website, hiển thị cho các sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Ưu tiên đã từng làm việc với các Frontend Framework như ReactJS',
        }
    }
    , {
        id: '9',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },

        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '10',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '11',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '12',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '13',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '14',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '15',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hồ Chí Minh',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '16',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "tester",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '17',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "tester",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '18',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '19',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '20',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '21',
        title: 'Product Design',
        description: 'Product Designer (Commercial)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hồ Chí Minh",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Thực hiện các dự án UI/UX',
            description2: 'Thiết kế Website, App trong lĩnh vực thương mại điện tử, ERP',
            description3: 'Tạo bản phác thảo, wireframe và prototype để trình bày ý tưởng thiết kế',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Các công việc khác theo yêu cầu của quản lý.',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Có từ 5 năm kinh nghiệm trở lên phát triển ứng dụng di động (React Native)',
            request2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '22',
        title: 'Thực tập Frontend(Fulltime)',
        description: 'Executive, Onsite Merchandise - Automatives',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Rà soát, kiểm tra các tài liệu thiết kế, tài liệu hướng dẫn, tài liệu chung của Công ty, đảm bảo đáp ứng đầy đủ, chính xác về yêu cầu nghiệp vụ',
            description5: ' Viết/cập nhật các tài liệu URD, FSD. Sign-off tài liệu với các bên liên quann',
            description6: ' Trao đổi, làm rõ yêu cầu, kết hợp khảo sát, phân tích các quy',
        },
        candidateRequirements: {
            request1: ' Phân tích yêu cầu nghiệp vụ',
            request2: 'Phân tích hệ thống và đề xuất giải pháp',
            request3: 'Phát triển business requirement specifications (BRS)',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Có kinh nghiệm sử dụng ký hiệu mô hình hóa như UML, CASE, ER,',
        }
    }, {
        id: '23',
        title: 'Business Analyst (Odoo)',
        description: 'Data Analyst (Pricing)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Chi tiết công việc trao đổi trong quá trình phỏng vấn',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Sinh viên năm cuối ngành CNTT hoặc đã tốt nghiệp',
            request2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '24',
        title: 'Business Development',
        description: 'Sales Executive (Cross Border-Chinese Speaking)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Rà soát, kiểm tra các tài liệu thiết kế, tài liệu hướng dẫn, tài liệu chung của Công ty, đảm bảo đáp ứng đầy đủ, chính xác về yêu cầu nghiệp vụ',
            description5: ' Viết/cập nhật các tài liệu URD, FSD. Sign-off tài liệu với các bên liên quann',
            description6: ' Trao đổi, làm rõ yêu cầu, kết hợp khảo sát, phân tích các quy',
        },
        candidateRequirements: {
            request1: ' Phân tích yêu cầu nghiệp vụ',
            request2: 'Phân tích hệ thống và đề xuất giải pháp',
            request3: 'Phát triển business requirement specifications (BRS)',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Có kinh nghiệm sử dụng ký hiệu mô hình hóa như UML, CASE, ER,',
        }
    },
    {
        id: '25',
        title: 'Lập trình viên React Native',
        description: 'Product Designer (Commercial)',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Có từ 5 năm kinh nghiệm trở lên phát triển ứng dụng di động (React Native)',
            description2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            description3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Sinh viên từ năm cuối hoặc vừa tốt nghiệp chuyên ngành thiết kế đồ họa.',
            request2: 'Đi làm fulltime (cho phép nghỉ tối đa 2 buổi/ tuần để lên trường nếu việc học yêu cầu)',
            request3: 'Biết sử dụng các phần mềm như: Figma, Adobe XD,  Adobe',
            request4: 'Photoshop, Adobe Illustrator, Adobe Premiere, Adobe After Effects.',
            request5: 'Có tính sáng tạo cao, thẩm mỹ tinh tế, hiện đại',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '26',
        title: 'Thực tập sinh Python',
        description: 'Executive, Onsite Merchandise - Automatives',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Phát triển ứng dụng ODOO (phát triển và tùy chỉnh module mới).',
            description2: 'Sử dụng lại các tính năng có sẵn trong ODOO.',
            description3: 'Tạo mô-đun tùy chỉnh trong ODOO để đáp ứng yêu cầu cụ thể.',
            description4: 'Tham gia vào các dự án phát triển các sản phẩm, dịch vụ.',
            description5: 'Phát triển các ứng dụng / tính năng vận hành doanh nghiệp hàng ngày.',
            description6: 'Thực hiện các công việc khác theo yêu cầu của TBP',
        },
        candidateRequirements: {
            request1: 'Sinh viên năm cuối ngành CNTT',
            request2: 'Đi làm fulltime (cho phép nghỉ tối đa 2 buổi/ tuần để lên trường nếu việc học yêu cầu)',
            request3: 'Có kiến thức về Python, có hiểu biết về Odoo là lợi thế',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    }, {
        id: '27',
        title: 'Lập trình Website',
        description: 'Data Analyst (Pricing)',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: ' Lập trình web theo thiết kế UX/UI trên Figma hoặc file .psd',
            description2: 'Tham gia phát triển các dự án về web, xây dựng các chức năng cho website đáp ứng đa nền tảng PC, Smartphone, Tablet',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Phối hợp với bộ phận SEO Web, Marketing Online tối ưu hóa website theo tiêu chuẩn SEO và có khả năng tự cập nhật các chuẩn SEO, các thuật toán mới nhất của Google.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: ' Phối hợp và hỗ trợ bộ phận thiết kế để tối ưu giao diện Website, hiển thị cho các sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Ưu tiên đã từng làm việc với các Frontend Framework như ReactJS',
        }
    },
    {
        id: '28',
        title: 'Business Development',
        description: 'Sales Executive (Cross Border-Chinese Speaking)',
        address: 'Hồ Chí Minh',
        group: "Backend",
        location: "Hồ Chí Minh",
        type: "Bán thời gian",
        jobDescription: {
            description1: ' Lập trình web theo thiết kế UX/UI trên Figma hoặc file .psd',
            description2: 'Tham gia phát triển các dự án về web, xây dựng các chức năng cho website đáp ứng đa nền tảng PC, Smartphone, Tablet',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Phối hợp với bộ phận SEO Web, Marketing Online tối ưu hóa website theo tiêu chuẩn SEO và có khả năng tự cập nhật các chuẩn SEO, các thuật toán mới nhất của Google.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: ' Phối hợp và hỗ trợ bộ phận thiết kế để tối ưu giao diện Website, hiển thị cho các sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Ưu tiên đã từng làm việc với các Frontend Framework như ReactJS',
        }
    }
    , {
        id: '29',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },

        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '30',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '31',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '32',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '33',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '34',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '35',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hồ Chí Minh',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '36',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "tester",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '37',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "tester",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '38',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '39',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '40',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '41',
        title: 'Product Design',
        description: 'Product Designer (Commercial)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hồ Chí Minh",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Thực hiện các dự án UI/UX',
            description2: 'Thiết kế Website, App trong lĩnh vực thương mại điện tử, ERP',
            description3: 'Tạo bản phác thảo, wireframe và prototype để trình bày ý tưởng thiết kế',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Các công việc khác theo yêu cầu của quản lý.',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Có từ 5 năm kinh nghiệm trở lên phát triển ứng dụng di động (React Native)',
            request2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '42',
        title: 'Thực tập Frontend(Fulltime)',
        description: 'Executive, Onsite Merchandise - Automatives',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Rà soát, kiểm tra các tài liệu thiết kế, tài liệu hướng dẫn, tài liệu chung của Công ty, đảm bảo đáp ứng đầy đủ, chính xác về yêu cầu nghiệp vụ',
            description5: ' Viết/cập nhật các tài liệu URD, FSD. Sign-off tài liệu với các bên liên quann',
            description6: ' Trao đổi, làm rõ yêu cầu, kết hợp khảo sát, phân tích các quy',
        },
        candidateRequirements: {
            request1: ' Phân tích yêu cầu nghiệp vụ',
            request2: 'Phân tích hệ thống và đề xuất giải pháp',
            request3: 'Phát triển business requirement specifications (BRS)',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Có kinh nghiệm sử dụng ký hiệu mô hình hóa như UML, CASE, ER,',
        }
    }, {
        id: '43',
        title: 'Business Analyst (Odoo)',
        description: 'Data Analyst (Pricing)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Chi tiết công việc trao đổi trong quá trình phỏng vấn',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Sinh viên năm cuối ngành CNTT hoặc đã tốt nghiệp',
            request2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '44',
        title: 'Business Development',
        description: 'Sales Executive (Cross Border-Chinese Speaking)',
        address: 'Hà Nội',
        group: "Frontend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Tham gia vào các dự án của Công ty với nhiệm vụ phát triển giao diện người dùng cho phần mềm, ứng dụng trên nền tảng Web, Mobile, khắc phục sự cố giao diện phần mềm',
            description2: 'Phối hợp với team Backend trong thiết kế API.',
            description3: 'Thực hiện các công việc được phân công bởi quản lý trực tiếp.',
            description4: 'Rà soát, kiểm tra các tài liệu thiết kế, tài liệu hướng dẫn, tài liệu chung của Công ty, đảm bảo đáp ứng đầy đủ, chính xác về yêu cầu nghiệp vụ',
            description5: ' Viết/cập nhật các tài liệu URD, FSD. Sign-off tài liệu với các bên liên quann',
            description6: ' Trao đổi, làm rõ yêu cầu, kết hợp khảo sát, phân tích các quy',
        },
        candidateRequirements: {
            request1: ' Phân tích yêu cầu nghiệp vụ',
            request2: 'Phân tích hệ thống và đề xuất giải pháp',
            request3: 'Phát triển business requirement specifications (BRS)',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Có kiến thức cơ bản về HTML, CSS, Javascript, React Native',
            request6: 'Có kinh nghiệm sử dụng ký hiệu mô hình hóa như UML, CASE, ER,',
        }
    },
    {
        id: '45',
        title: 'Lập trình viên React Native',
        description: 'Product Designer (Commercial)',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Có từ 5 năm kinh nghiệm trở lên phát triển ứng dụng di động (React Native)',
            description2: 'Có kiến thức về ngôn ngữ JavaScript và TypeScript',
            description3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            description4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            description5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            description6: 'Làm quen với các công cụ phiên bản mã (Git)',
        },
        candidateRequirements: {
            request1: 'Sinh viên từ năm cuối hoặc vừa tốt nghiệp chuyên ngành thiết kế đồ họa.',
            request2: 'Đi làm fulltime (cho phép nghỉ tối đa 2 buổi/ tuần để lên trường nếu việc học yêu cầu)',
            request3: 'Biết sử dụng các phần mềm như: Figma, Adobe XD,  Adobe',
            request4: 'Photoshop, Adobe Illustrator, Adobe Premiere, Adobe After Effects.',
            request5: 'Có tính sáng tạo cao, thẩm mỹ tinh tế, hiện đại',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '46',
        title: 'Thực tập sinh Python',
        description: 'Executive, Onsite Merchandise - Automatives',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Phát triển ứng dụng ODOO (phát triển và tùy chỉnh module mới).',
            description2: 'Sử dụng lại các tính năng có sẵn trong ODOO.',
            description3: 'Tạo mô-đun tùy chỉnh trong ODOO để đáp ứng yêu cầu cụ thể.',
            description4: 'Tham gia vào các dự án phát triển các sản phẩm, dịch vụ.',
            description5: 'Phát triển các ứng dụng / tính năng vận hành doanh nghiệp hàng ngày.',
            description6: 'Thực hiện các công việc khác theo yêu cầu của TBP',
        },
        candidateRequirements: {
            request1: 'Sinh viên năm cuối ngành CNTT',
            request2: 'Đi làm fulltime (cho phép nghỉ tối đa 2 buổi/ tuần để lên trường nếu việc học yêu cầu)',
            request3: 'Có kiến thức về Python, có hiểu biết về Odoo là lợi thế',
            request4: 'Có kinh nghiệm với các quy trình xây dựng về thiết lập, định cấu hình và xuất bản ứng dụng React Native lên App Store và Google Play',
            request5: ' Kiến thức vững chắc về SDK Android hoặc iOS và cách xử lý các kích thước màn hình khác nhau',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    }, {
        id: '47',
        title: 'Lập trình Website',
        description: 'Data Analyst (Pricing)',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: ' Lập trình web theo thiết kế UX/UI trên Figma hoặc file .psd',
            description2: 'Tham gia phát triển các dự án về web, xây dựng các chức năng cho website đáp ứng đa nền tảng PC, Smartphone, Tablet',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Phối hợp với bộ phận SEO Web, Marketing Online tối ưu hóa website theo tiêu chuẩn SEO và có khả năng tự cập nhật các chuẩn SEO, các thuật toán mới nhất của Google.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: ' Phối hợp và hỗ trợ bộ phận thiết kế để tối ưu giao diện Website, hiển thị cho các sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Ưu tiên đã từng làm việc với các Frontend Framework như ReactJS',
        }
    },
    {
        id: '48',
        title: 'Business Development',
        description: 'Sales Executive (Cross Border-Chinese Speaking)',
        address: 'Hồ Chí Minh',
        group: "Backend",
        location: "Hồ Chí Minh",
        type: "Bán thời gian",
        jobDescription: {
            description1: ' Lập trình web theo thiết kế UX/UI trên Figma hoặc file .psd',
            description2: 'Tham gia phát triển các dự án về web, xây dựng các chức năng cho website đáp ứng đa nền tảng PC, Smartphone, Tablet',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Phối hợp với bộ phận SEO Web, Marketing Online tối ưu hóa website theo tiêu chuẩn SEO và có khả năng tự cập nhật các chuẩn SEO, các thuật toán mới nhất của Google.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: ' Phối hợp và hỗ trợ bộ phận thiết kế để tối ưu giao diện Website, hiển thị cho các sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Ưu tiên đã từng làm việc với các Frontend Framework như ReactJS',
        }
    }
    , {
        id: '49',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },

        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '50',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Backend",
        location: "Hà Nội",
        type: "Bán thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '51',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '52',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '53',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '54',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '55',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hồ Chí Minh',
        group: "Product Design",
        location: "Hồ Chí Minh",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '56',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "tester",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '57',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "tester",
        location: "Hà Nội",
        type: "Toàn thời gian",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '58',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '59',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
    {
        id: '60',
        title: 'Lập trình viên NodeJS',
        description: '#NodeJS #Javascript',
        address: 'Hà Nội',
        group: "HR",
        location: "Hà Nội",
        type: "Thực tập sinh",
        jobDescription: {
            description1: 'Lập trình ứng dụng, chức năng hệ thống với NodeJS',
            description2: 'Phân tích yêu cầu, thiết kế hệ thống, phát triển các webservice và frontend theo mô hình Microservice bằng NodeJs và các framework NodeJs',
            description3: ' Cập nhật các kiến thức mới, công nghệ mới, duy trì cho website, sản phẩm, ứng dụng được hoạt động ổn định và ngày càng tối ưu hơn',
            description4: 'Thực hiện các công việc khác liên quan đến bảo vệ, bảo mật dữ liệu của sản phẩm.',
            description5: 'Tham gia các công đoạn tìm hiểu yêu cầu, phân tích, thiết kế, nghiên cứu công nghệ khi được phân công.',
            description6: 'Làm việc theo sự phân công của Trưởng nhóm/ Quản lý dự án, phối hợp giữa các nhóm để phát triển sản phẩm.',
        },
        candidateRequirements: {
            request1: ' Nắm vững  nền tảng trong việc lập trình PHP, WordPress, Javascript, CSS3, HTML5, Jquery, Ajax',
            request2: 'Có ít nhất trên 2 năm kinh nghiệm xây dựng, phát triển website sử dụng ngôn ngữ lập trình PHP, mã nguồn WordPress.',
            request3: 'Có kinh nghiệm với các thư viện quản lý state (Redux), Restful API, Push notification…',
            request4: 'Biết cài đặt và sử dụng Theme, Plugin trên Wordpress, Framework của WordPress',
            request5: 'Có khả năng đọc hiểu tiếng Anh phục vụ công việc',
            request6: 'Làm quen với các công cụ phiên bản mã (Git)',
        }
    },
]
export const fakeDataFilterNew: string[] = ['TIN NỘI BỘ', 'METAVERSE', 'BLOCKCHAIN', 'GAME NFT', 'PHÁT TRIỂN PHẦN MỀM']
export const fakeDataNews: NewsType[] = [
    {
        id: '1',
        image: Images.Image1,
        content: "Magic Leap 2 blurs the line between AR and VR - it's ,",
        description: "The Metaverse has been around for a long time - it just hasn't been very good. The term, concept capture - all connected spaces, has entered the cultural zeitgeist",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '2',
        image: Images.ImageNew1,
        content: "Step into the Metaverse technology",
        description: "The Metaverse is one of the most popular topics right now and is said to be changing people's lives completely. From schools and offices to parties and",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '3',
        image: Images.ImageNew2,
        content: "What I learned diving headfirst into the metaverse",
        description: "Until a few months ago, I would have described myself as a Luddite when it came to the Metaverse. But while working on the Decoded show for CNN International, I had the opportunity to dive headfirst into these virtual",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '4',
        image: Images.ImageNew3,
        content: "The European Blockchain Conference 2023 is back in Barcelona",
        description: "After 7 successful events, the European Blockchain Convention 2023 is ready to take place again from February 15 to 17 at the 5-star Hyatt Regency",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '5',
        image: Images.ImageNew4,
        content: "Starbucks unveils blockchain-based loyalty platform",
        description: "Starbucks today officially introduces the Starbucks Odyssey, which will launch later this year - the first coffee ring to be built using Web3 technology. The ne",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '6',
        image: Images.ImageNew5,
        content: "Will Apple build its own blockchain?",
        description: "Last week, I wrote about the problems faced by Axie Infinity following the $625 million heist. This week, I'm telling you about Apple and crypto. If you like my.",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '7',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '8',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '9',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '10',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '11',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '12',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '13',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    }, {
        id: '14',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '15',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '16',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '17',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '18',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '19',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '20',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '21',
        image: Images.Image1,
        content: "Magic Leap 2 blurs the line between AR and VR - it's ,",
        description: "The Metaverse has been around for a long time - it just hasn't been very good. The term, concept capture - all connected spaces, has entered the cultural zeitgeist",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '22',
        image: Images.ImageNew1,
        content: "Step into the Metaverse technology",
        description: "The Metaverse is one of the most popular topics right now and is said to be changing people's lives completely. From schools and offices to parties and",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '23',
        image: Images.ImageNew2,
        content: "What I learned diving headfirst into the metaverse",
        description: "Until a few months ago, I would have described myself as a Luddite when it came to the Metaverse. But while working on the Decoded show for CNN International, I had the opportunity to dive headfirst into these virtual",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '24',
        image: Images.ImageNew3,
        content: "The European Blockchain Conference 2023 is back in Barcelona",
        description: "After 7 successful events, the European Blockchain Convention 2023 is ready to take place again from February 15 to 17 at the 5-star Hyatt Regency",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '25',
        image: Images.ImageNew4,
        content: "Starbucks unveils blockchain-based loyalty platform",
        description: "Starbucks today officially introduces the Starbucks Odyssey, which will launch later this year - the first coffee ring to be built using Web3 technology. The ne",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '26',
        image: Images.ImageNew5,
        content: "Will Apple build its own blockchain?",
        description: "Last week, I wrote about the problems faced by Axie Infinity following the $625 million heist. This week, I'm telling you about Apple and crypto. If you like my.",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '27',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '28',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '29',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '30',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '31',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '32',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '33',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    }, {
        id: '34',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '35',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '36',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '37',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '38',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '39',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '40',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '41',
        image: Images.Image1,
        content: "Magic Leap 2 blurs the line between AR and VR - it's ,",
        description: "The Metaverse has been around for a long time - it just hasn't been very good. The term, concept capture - all connected spaces, has entered the cultural zeitgeist",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '42',
        image: Images.ImageNew1,
        content: "Step into the Metaverse technology",
        description: "The Metaverse is one of the most popular topics right now and is said to be changing people's lives completely. From schools and offices to parties and",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '43',
        image: Images.ImageNew2,
        content: "What I learned diving headfirst into the metaverse",
        description: "Until a few months ago, I would have described myself as a Luddite when it came to the Metaverse. But while working on the Decoded show for CNN International, I had the opportunity to dive headfirst into these virtual",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '44',
        image: Images.ImageNew3,
        content: "The European Blockchain Conference 2023 is back in Barcelona",
        description: "After 7 successful events, the European Blockchain Convention 2023 is ready to take place again from February 15 to 17 at the 5-star Hyatt Regency",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '45',
        image: Images.ImageNew4,
        content: "Starbucks unveils blockchain-based loyalty platform",
        description: "Starbucks today officially introduces the Starbucks Odyssey, which will launch later this year - the first coffee ring to be built using Web3 technology. The ne",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '46',
        image: Images.ImageNew5,
        content: "Will Apple build its own blockchain?",
        description: "Last week, I wrote about the problems faced by Axie Infinity following the $625 million heist. This week, I'm telling you about Apple and crypto. If you like my.",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '47',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '48',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '49',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '50',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '51',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '52',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '53',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    }, {
        id: '54',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '55',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '56',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '57',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '58',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '59',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '60',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '61',
        image: Images.Image1,
        content: "Magic Leap 2 blurs the line between AR and VR - it's ,",
        description: "The Metaverse has been around for a long time - it just hasn't been very good. The term, concept capture - all connected spaces, has entered the cultural zeitgeist",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '62',
        image: Images.ImageNew1,
        content: "Step into the Metaverse technology",
        description: "The Metaverse is one of the most popular topics right now and is said to be changing people's lives completely. From schools and offices to parties and",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '63',
        image: Images.ImageNew2,
        content: "What I learned diving headfirst into the metaverse",
        description: "Until a few months ago, I would have described myself as a Luddite when it came to the Metaverse. But while working on the Decoded show for CNN International, I had the opportunity to dive headfirst into these virtual",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '64',
        image: Images.ImageNew3,
        content: "The European Blockchain Conference 2023 is back in Barcelona",
        description: "After 7 successful events, the European Blockchain Convention 2023 is ready to take place again from February 15 to 17 at the 5-star Hyatt Regency",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '65',
        image: Images.ImageNew4,
        content: "Starbucks unveils blockchain-based loyalty platform",
        description: "Starbucks today officially introduces the Starbucks Odyssey, which will launch later this year - the first coffee ring to be built using Web3 technology. The ne",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '66',
        image: Images.ImageNew5,
        content: "Will Apple build its own blockchain?",
        description: "Last week, I wrote about the problems faced by Axie Infinity following the $625 million heist. This week, I'm telling you about Apple and crypto. If you like my.",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '67',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '68',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '69',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '70',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '71',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '72',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '73',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    }, {
        id: '74',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '75',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '76',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '77',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '78',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '79',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
    {
        id: '80',
        image: Images.ImageNew6,
        content: "Indonesia is exploring a blockchain-enabled carbon trading system",
        description: "Indonesia wants to lead the blockchain craze towards greener use. The Indonesia Stock Exchange (IDX) has entered into a Memorandum of Understanding with",
        detail: {
            detailOne: "Answer - Metaverse is one of the most anticipated internet phenomena of this decade. You may have seen how Virtual Reality (VR) works in movies. You can have a VR headset at home to play games. But Metaverse is more than that. It combines VR, augmented reality (AR) and even brain-computer capabilities. It's a new way of interacting with technology. Metaverse is a 3D network of virtual worlds that allows you to connect and collaborate. If you have watched or read about Ready Player One, you must be familiar with this idea.",
            detailTwo: "I went to the headquarters of a famous wine brand in Decentraland. I am the only avatar there, although there are games and quests offered, they are not fun. Of course, I had no way of tasting the brand's wine, and I was confused as to what it was trying to achieve. But according to research firm Gartner, by 2026, a quarter of us will spend at least an hour a day in the metaverse for work, shopping, education or socializing. I think it's possible, especially if you consider that a game like Fortnite is really a metaverse by definition, and, after many years of people working from home and using video conferencing, the virtualized business experience is just as logical. steps. The metaverse is going to fundamentally change the way we do things, it's very hard to pin down how and what.",
            detailThree: "Andrew Bosworth is the CTO and the avatars we met in the Horizon Workrooms, where I was surprised how none of us have legs - a feature that is not yet in this metaverse, but will be in the future, as was recently announced. He joined the company that used to be called Facebook in its early days and firmly believes that Meta can be trusted to create the next generation of the Internet. Honestly, no one is investing more in privacy and data protection. No one is more focused on this issue than Meta"
        }
    },
]
export const fakeDataGroup: DataType[] = [
    {
        name: 'Tất cả',
        id: '6'
    },
    {
        name: 'Frontend',
        id: '1'
    }, {
        name: 'Backend',
        id: '2'
    }, {
        name: 'Product Design',
        id: '3'
    }, {
        name: 'tester',
        id: '4'
    }, {
        name: 'HR',
        id: '5'
    },

]
export const fakeDataType: DataType[] = [
    {
        name: 'Tất cả',
        id: '1'
    }, {
        name: 'Toàn thời gian',
        id: '2'
    }, {
        name: 'Bán thời gian',
        id: '3'
    }, {
        name: 'Thực tập sinh',
        id: '4'
    }
]
export const fakeDataLocation: DataType[] = [
    {
        name: 'Tất cả',
        id: '1'
    }, {
        name: 'Hà Nội',
        id: '2'
    }, {
        name: 'Hồ Chí Minh',
        id: '3'
    }
]
