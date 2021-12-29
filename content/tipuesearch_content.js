var tipuesearch = {"pages": [{'title': 'About', 'text': '本學期的電腦輔助設計實習, 要求每一位學員根據本 HW template 的格式建立個人的作業倉儲與網頁. \n \n 我的學號: 40923146 \n 網站倉儲:  https://github.com/a40923146/cad2021_hw \n 網站連結:  https://mde.tw/cad2021_hw \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': 'w1:創建倉儲及建立可攜系統,連結github的token \n w4:學習如何拍攝及上傳wink \n w6:下載可攜版本NX \n w10:解決設備更新而出現的網路連線問題 \n w15:各組選出組長及副組長,將組員資料合併後執行Pull Requests進行整合。 \n', 'tags': '', 'url': '每周進度.html'}, {'title': 'w10網路設定', 'text': '1:關閉ipv4並且開啟ipv6 \n \n 2.proxy設定,關閉[自動偵測設定],並輸入[2001:288:6004:17::42] 3128 \n 3.在火狐瀏覽器內也設定相同proxy \n \n', 'tags': '', 'url': 'w10網路設定.html'}, {'title': 'HW1', 'text': 'HW1 佔學期成績 25% \n HW1 必須在 2021.11.10 22:00 之前完成. \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於  2021.11.10 22:00 關閉. \n 作業一: meArm Robot 零件繪圖與機電運動模擬場景製作 \n Step1 : 下載  meARM.7z  這個包含尚未完成組立的 meArm Robot 場景與雷射切割零件組立手冊. \n meArm_75-0040_v1.pdf  則是另外一本組立參考手冊. \n Step2 : 從課程網頁中的  Compile CoppeliaSim 頁面 , 下載  coppeliaSim 4.1.0 官方版與 MSYS2 編譯版.7z  (檔案大小 412 MB, 解開壓縮後 1GB) 可攜套件. \n Step3 : 在 HW1 中, 要求每一位學員透過程式亂數分配 (兩班實際亂數分配結果以上課時點擊下列按鈕所得結果為準) 所使用的兩套參數式 CAD 套件, 從軟體發展緣起開始進行介紹,\xa0 經過教育版軟體套件檔案的取得, 下載安裝以及配置使用. 根據 Step1 中的零件尺寸, 逐一完成 meArm Robot 各零件繪製與組立. 並將零件 匯入  CoppeliaSim 進行組裝配置後, 以  UI 介面 中的 slider 控制 meArm Robot 各軸的旋轉作動. \n 2b CAD 套件分配結果:  https://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件: \n 1. CAD 套件分配表: \n sw: Solidworks, inv: Inventor, nx: NX12, ons: Onshape, slvs: Solvespace \n 2a 套件亂數分配結果 \n 2b 套件亂數分配結果 \n 2. 在兩套 CAD 完成零件繪圖並轉入 CoppeliaSim 後, 為了建立 Dynamic Model 必須利用  shape edit modes  轉為  clean model , 並與實際轉入的 STL 格式零件外形結合應用後建立模擬場景 (scenes). \n 3. meARM Robot  動態模擬場景 的建構, 可參考  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 , 也可參考  Uarm Robot model  與相關 影片 . \n 4. CoppeliaSim design dynamic simulations  說明頁面 . \n 5.  網際 Lua  程式執行. \n 6.  meArm.slvs ,  meArm_in_solvespace.slvs \n 7. UI 介面程式參考: \n function closeEventHandler(h)\n    sim.addLog(sim.verbosity_scriptinfos,\'Window \'..h..\' is closing...\')\n    simUI.hide(h)\nend\n\nfunction joint1_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta1 set to \'..newVal)\n    sim.setJointTargetPosition(joint1, newVal*deg)\nend\n\nfunction joint2_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta2 set to \'..newVal)\n    sim.setJointTargetPosition(joint2, newVal*deg)\nend\n\nfunction joint3_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta3 set to \'..newVal)\n    sim.setJointTargetPosition(joint3, newVal*deg)\nend\n\nfunction joint16_rotate(ui,id,newVal)\n    simUI.setLabelText(ui,3000,\'theta16 set to \'..newVal)\n    sim.setJointTargetPosition(joint16, newVal*deg)\n    sim.setJointTargetPosition(joint20, -newVal*deg)\nend\n\nfunction sysCall_init()\n    -- do some initialization here\n    joint1 = sim.getObjectHandle(\'motor1\')\n    joint2 = sim.getObjectHandle(\'motor2\')\n    joint3 = sim.getObjectHandle(\'motor3\')\n    joint16 = sim.getObjectHandle(\'motor16\')\n    joint20 = sim.getObjectHandle(\'motor20\')\n    i = 0\n    deg = math.pi/180\n    print(i)\n    xml = [[\n<ui closeable="true" on-close="closeEventHandler" resizable="true">\n    <label text="This is a demo of the CustomUI plugin. Browse through the tabs below to explore all the widgets that can be created with the plugin." wordwrap="true" />\n    <tabs>\n        <tab title="Numeric">a\n            <label text="Sliders can be oriented horizontally or vertically, and have optional properties that can be set (in the XML) such as minimum and maximum value." wordwrap="true" />\n            <label text="" id="3000" wordwrap="true" />\n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="360" on-change="joint1_rotate" />\n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="65" on-change="joint2_rotate" />\n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1" \n            minimum="-90" maximum="185" on-change="joint3_rotate" />\n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1" \n            minimum="0" maximum="15" on-change="joint16_rotate" />\n        </tab>\n    </tabs>\n</ui>\n]]\n    ui=simUI.create(xml)\n    \nend \n \n (From:  2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf ) \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1 繪圖', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 緣起說明與介紹 \n 請不要直接從找到的 CAD1 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD1 繪圖.html'}, {'title': 'CAD1 安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 套件下載安裝與配置 \n CAD1 下載安裝與配置流程 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 操作流程.html'}, {'title': 'CAD2 繪圖', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 緣起說明與介紹 \n 請不要直接從找到的 CAD2 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD2 繪圖.html'}, {'title': 'CAD2 安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 安裝配置.html'}, {'title': 'CAD2 操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 操作流程.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD1 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'W13', 'text': '零組件進度wink \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'HW3-1', 'text': '1957年 - 由帕特里克·和拉蒂博士所開發的 PRONTO ，這是第一個商用數控編程系統，所有 CAD 的設計起源都於此相關。 \n 1960年 \xad- 出現的 Sketchpad 是由伊凡·蘇澤蘭創建，為第一個交互是繪圖系統，使用者可以利用 " 光筆 " ，直接和電腦螢幕進行動式交流。其中幾何約束是 Sketchpad 中的另一個主要發明，之後人們在此基礎上相繼開發了 CAD 和 CAM 。 \n 1971年 - 帕特里克 · 漢拉蒂博士用 Fortran 語言編寫了 ADAM ，這個交互式圖形設計可以在所有的機器上運行，今天 80 ％的 CAD 程序都源於 ADAM 。 \n 1981年 - 是 Dassault Systemes( 達索 ) 公司的旗下品牌 -  多平台 CAD 軟件，至今仍在使用。 \n 1982年 -AutoCAD 是由 Autodesk （歐特克）公司開發的第一個用於個人計算機 ( 代替了大型或微型計算機 ) 的 2D 設計 CAD 軟件，現今為全世界設計業界的標準。 \n 1987年 –Pro/Enfineer 是 PTC Creo 的前身，是首個以 Sketchpad 理念為依託的主流 CAD 軟件，可以說它讓 Sketchpad 又 “ 重獲新生 ” 。 Pro/Engineer 是第一個基於實體模型，參數化設計 ( 無論多麼複雜的產品幾何模型，都可以分解成有限數量的構成特徵，而每一種構成特徵，都可以用有限的參數完全約束 ) ，並且採用了單一數據庫來解決特徵的相關性問題的 CAD 設計軟件。同時它徹底打破了至今為止用 Fortran 和 Assembler 編寫程序的傳統。 \n 1994-STEP為繼 IGES 之後成為產品 3D 模型數據交互轉換一種新的標準格式，自 1994 年首次發布以來，成為模型數據交換的國際標準，至今仍然是最常用的格式。 \n 1995年 -SolidWorks 95 是 Dassault Systemes( 達索 ) 公司開發的另一款很成功的軟件，它讓更多的工程師能受益於 3D CAD 技術。 \n 1995年 -Solid Edge 是西門子的一款 PLM 軟件 ( 產品生命週期管理 ) ，由 Microsoft Windows 操作系統平台開發而成，借助於 Windows 的功能提供實體建模，裝配建模和二維正交視圖的 CAD 製圖軟件，它延續並超越了 SolidWorks 的所有優勢。 \n 1999年 -Autodesk Inventor 軟件是 AutoDesk 公司於 1999 年底推出的三維可視化實體模擬軟件，在使用上更加直觀簡單，能在短時間內創建複雜的組件，可以創建三維模型和二維製造工程圖、創建自適應的特徵、零件和子部件，還可以管理上千個零件和大型部件，它的 “ 連接到網絡 ” 工具可以使工作組人員協同工作，方便數據共享，此軟件至今仍在使用，它在 CAD 軟件世界裡更具其競爭性。 \n 2012年 -Autodesk 360  是一個可以提供一系列廣泛特性、雲端服務和產品的雲端計算平臺。可隨時隨地幫助客戶顯著優化設計、可視化、模擬以及共用流程，將 CAD 設計平臺移入了全新的雲端計算平臺。 \n', 'tags': '', 'url': 'HW3-1.html'}, {'title': 'HW3-2', 'text': '', 'tags': '', 'url': 'HW3-2.html'}, {'title': 'w11', 'text': '1.檢查名單內的github帳號是否正確 \n 2.自選一組平面四連桿尺寸，並使用所分配到的CAD進行繪圖， 完成組立後請轉入 CoppeliaSim 製作運動模擬場景． \n \n 各 零件尺寸圖 與 \xa0 3D 零件檔案 , 請放入各學員的倉儲中並在 W11 標題 H2 頁面中 提供下載 . \n 請將兩套 CAD \xa0 繪圖過程製作成一份 Wink 影片 檔案, 並放入 W11 標題 H2 頁面中.. \n 請將組立件轉入 CoppeliaSim, 並製作運動 模擬場景的過程, 製作成一份 Wink 影片 檔案, 並放入個人網頁中的 W11 標題 H2 頁面中. \n \n', 'tags': '', 'url': 'w11.html'}, {'title': '進度', 'text': '11/29：找到範例後，依序畫出４個零件，並載入CoppeliaSim後發現很難組裝，後來老師提出直接在CAD內組裝後，在CoppeliaSim內再切割即可． \n 11/29-2：回家後把四連桿在NX12.0裡組裝完成了，正在尋找如何在CoppeliaSim內切割的方法． \n \n 12/6：看到老師在上課時的示範,之後去問同學一些細節的問題,之後就完成了 \n', 'tags': '', 'url': '進度.html'}, {'title': 'w11 繪圖過程wink', 'text': '\n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w11 繪圖過程wink.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n Final Project 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n 彈性製造系統場景設計與製作 \n 請從  https://github.com/mdecourse/scenes  與  https://github.com/mdecourse/models  中選擇場景或模型, 配合  cad2021_textbook.pdf  (登入 @gm 帳號後下載) 教材中的內容, 自選製作與組立產品, 組合成一個 Flexible Manufacturing System 系統場景. \n 彈性製造系統內容說明 \n 範例: \n \n \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'Wink', 'text': '', 'tags': '', 'url': 'Wink.html'}, {'title': '問題', 'text': '1.設定Path to FFmpeg時：需先使用過ShareX錄製過影片，才會有ffmpeg檔案供選擇 \n 2.Render：視窗大小需為偶數 \n', 'tags': '', 'url': '問題.html'}, {'title': '上傳', 'text': 'wink影片的mp4檔案複製至倉儲內的downloads資料夾內 \n 至 https://mde.tw/cad2021/content/Wink.html ，空白處右鍵後點［檢視網頁原始碼］ \n \n 複製開頭為 <h1> Wink </h1>至下個標題（<h>） 並將 \n （１）data-dirname =" ./../cmsimde/static "刪減至只剩下 data-dirname =" /static " \n （２） height =" 712 "  width =" 1138 " 將視窗更改為wink裡所設定之視窗大小 \n （３）<source  src =" ./../downloads/wink/meArm_robot_wink.mp4 "  type =" video/mp4 "/> </video>更改為<source src="./../downloads/Wink檔案名稱.mp4" type="video/mp4" /></video> \n \n http://mde.tw/cmstemplate/content/Add%20Wink.html \n 加入\xa0 autoplay = "autoplay" 及\xa0 loop = "loop"   muted = ""   playsinline = "" 於視窗大小後 \n', 'tags': '', 'url': '上傳.html'}, {'title': '測試', 'text': '\n \n \n   \n \n \n \n \n \n \n \n', 'tags': '', 'url': '測試.html'}, {'title': '期末總結', 'text': '', 'tags': '', 'url': '期末總結.html'}, {'title': 'ag4', 'text': '', 'tags': '', 'url': 'ag4.html'}, {'title': '40923146', 'text': 'HW1：這學期學了許多東西，例如：NX、Onshape還有coppeliaSim和Wink。其中Onshape是之前完全沒碰過的，大致上和其他CAD軟體大同小異，也學會了如何拍攝和上傳Wink，能夠更好的 呈現製作的時的小細節，能夠和影片一樣隨時暫停並且加上註解和前後箭頭。 \n \n 如何上傳wink \n \n \n \n \n   \n \n \n \n \n HW1-coppeliasim \n 零組件進度wink \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n \n \n W11-四連桿機構 \n \n \n \n \n \n \n HW3 \n 3-1： \n \n 1957年 - 由帕特里克·和拉蒂博士所開發的 PRONTO ，這是第一個商用數控編程系統，所有 CAD 的設計起源都於此相關。 \n 1960年 \xad- 出現的 Sketchpad 是由伊凡·蘇澤蘭創建，為第一個交互是繪圖系統，使用者可以利用 " 光筆 " ，直接和電腦螢幕進行動式交流。其中幾何約束是 Sketchpad 中的另一個主要發明，之後人們在此基礎上相繼開發了 CAD 和 CAM 。 \n 1971年 - 帕特里克 · 漢拉蒂博士用 Fortran 語言編寫了 ADAM ，這個交互式圖形設計可以在所有的機器上運行，今天 80 ％的 CAD 程序都源於 ADAM 。 \n 1981年 - 是 Dassault Systemes( 達索 ) 公司的旗下品牌 - \xa0 多平台 CAD 軟件，至今仍在使用。 \n 1982年 -AutoCAD 是由 Autodesk （歐特克）公司開發的第一個用於個人計算機 ( 代替了大型或微型計算機 ) 的 2D 設計 CAD 軟件，現今為全世界設計業界的標準。 \n 1987年 –Pro/Enfineer 是 PTC Creo 的前身，是首個以 Sketchpad 理念為依託的主流 CAD 軟件，可以說它讓 Sketchpad 又 “ 重獲新生 ” 。 Pro/Engineer 是第一個基於實體模型，參數化設計 ( 無論多麼複雜的產品幾何模型，都可以分解成有限數量的構成特徵，而每一種構成特徵，都可以用有限的參數完全約束 ) ，並且採用了單一數據庫來解決特徵的相關性問題的 CAD 設計軟件。同時它徹底打破了至今為止用 Fortran 和 Assembler 編寫程序的傳統。 \n 1994-STEP為繼 IGES 之後成為產品 3D 模型數據交互轉換一種新的標準格式，自 1994 年首次發布以來，成為模型數據交換的國際標準，至今仍然是最常用的格式。 \n 1995年 -SolidWorks 95 是 Dassault Systemes( 達索 ) 公司開發的另一款很成功的軟件，它讓更多的工程師能受益於 3D CAD 技術。 \n 1995年 -Solid Edge 是西門子的一款 PLM 軟件 ( 產品生命週期管理 ) ，由 Microsoft Windows 操作系統平台開發而成，借助於 Windows 的功能提供實體建模，裝配建模和二維正交視圖的 CAD 製圖軟件，它延續並超越了 SolidWorks 的所有優勢。 \n 1999年 -Autodesk Inventor 軟件是 AutoDesk 公司於 1999 年底推出的三維可視化實體模擬軟件，在使用上更加直觀簡單，能在短時間內創建複雜的組件，可以創建三維模型和二維製造工程圖、創建自適應的特徵、零件和子部件，還可以管理上千個零件和大型部件，它的 “ 連接到網絡 ” 工具可以使工作組人員協同工作，方便數據共享，此軟件至今仍在使用，它在 CAD 軟件世界裡更具其競爭性。 \n 2012年 -Autodesk 360 \xa0 是一個可以提供一系列廣泛特性、雲端服務和產品的雲端計算平臺。可隨時隨地幫助客戶顯著優化設計、可視化、模擬以及共用流程，將 CAD 設計平臺移入了全新的雲端計算平臺。 \n \n \n \n', 'tags': '', 'url': '40923146.html'}]};