import './App.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GiLoveLetter} from 'react-icons/gi';
import garut from './images/garut.jpeg'
import fotoBersama from './images/foto-bersama.png'
import habshah from './images/habshah.jpg'
import chat1 from './images/chat1.jpg'
import chat2 from './images/chat2.jpg'
import situpatenggang from './images/situ-patenggang.jpeg'
import garut2 from './images/garut2.jpeg'

function App() {
  return (
    <div className="apps">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="17-06-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Chat Pertama</h3>
          <p>Kamu modus yaa ngucapin aku wisuda!! WKWKWKWKWK. LIHAT ITU AKU MASIH MANGGIL ASHA HEHEHEHHE, sebuah kelangkaann.</p>
          <img src={chat1} className="image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="17-06-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Chat WhatsApp Pertama</h3>
          <p>Pertama kali chat WhatsApp hihihi. Waktu ini pengen nyobain yang notes buat selingkuh2 gitu ga sih. Tapi sayangnya waktu itu ga lanjut chatan HEHEHEHEH.</p>
          <img src={chat2} className="image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10-9-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >s
          <h3 className="vertical-timeline-element-title">Video Tiktok 1 (Pertama Berdua)</h3>
          <p>Bisa dilihat betapa kakunya aku di video pertama tiktok kita HEHEHEHHE. Padahal aku sebelum sebelumnya cuma pengamat tiktok WKWKWK, tapi demi menghibur diri dan emang beneran kehibur jadi gasbet tiktokan truzzz.</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/RnSIRehYyyk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="24-9-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 2</h3>
          <p>Lagu favorite TikTok aku WKWKWKWKKW, setiap kemana mana kalau mau remake video TikTok pasti make video ini. Dan kamu juga pasti tau kan gerakan favorite aku di lagu ini HAHAHAH, jadi syndrom tiktok dehh.</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/LmcJrvfRtIY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="26-9-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 3</h3>
          <p>Sumpah ini videonya gatau malu banget sih, udah ngerekamnya di tenis meja, trus gayanya nyoba niruin artis TikTok HAHAHAHAHHA. Silahkan dilihat betapa percaya dirinya kita TikTok-an di tenis meja dengan gaya yang sangat memalukan</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/paSfpX-PQ1I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="27-9-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 4</h3>
          <p>Ini videonyaa waktu podcast ga sihh?? Setelah aku podcast terus memanfaatkan cahaya ilahi dari Alif WKWKWKWKKW. Padahal itu udah jam berapa ya keknya udah subuhan, tapi masih ada aja tenaganya</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/9MjX0T1pNgE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="27-9-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 5</h3>
          <p>One of my favorite tiktok yang pernah kita buat. Kek lucu bangettt bangett banget video ini HAHAHAHAH</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/8ZpUvsHJLek" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="30-9-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 6</h3>
          <p>"Sok imut lu anjing!" HAHAHHAHAHAHA, untuk kita bikinnya pas ga ada raka ya, jadinya ga di gas sama doi. Ini keknya kita janjian make baju biru itu ya, biar bajunya samaa.</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/MItX4OIAsCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="3-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 7</h3>
          <p>Udah weekend ke kantorr, trus janjiann lagi buat TikTok-an. Di video ituu aku kelihatann kek bocah banget gasihh emangg, makanyaa pada diajakin temen2 kamu kek bocah. Dan emang aku masih bocah sih, masih muda banget kan kelahiran 2000</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/dbV-y_6A8is" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="3-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 8</h3>
          <p>Ke lembang bareng faizz, trus TikTok-an di kopi pelangii hahahhahahah. Was was banget yah ini TikTokannyaa, setiap ada orang yang lewat pasti agak sok cool dluu trus lanjut lagii WKKWKWKWKKW</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/nWsPv0SLtts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="6-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Foto Bersama Bapak Willy</h3>
          <p>Foto bareng sama bapak willy WKWKWKWWKK, beneran kek anak anak dan bapaknya yah. Mukanya willy disitu sumpah lucu banget, trus tiba2 merah lagi mukanya WKWKWK, ternyata diam2 tangan dia bentuk love!!</p>
          <img src={fotoBersama} className="image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="7-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 9</h3>
          <p>VIDEO TIKTOK PERTAMA KITA YANG VIRAL KWKWKKWKW, awal mulanyaaa para bocah bocah ngefollow habshah, keknyaa waktu likenyaa 400an dehh. Mungkin video yang berseragam bisa dibilin kembalii hihi</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/us5R3dglhS8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="7-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Photoshooth SMA</h3>
          <p>Ternyata kita berdua masih cocok pake pakaian SMA yahh WKWKKWKKWKW, sumpah kocak banget waktu photosoot, pede banget lagi tiktokan pake baju SMA, bener2 niaatt. Seklaim lah ya kita jadi artis Eduka HIHIHIHU. Alif keren banget yaa bikin Photoshoot Video SMA</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/BQaDsfo3Q-s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="8-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 10</h3>
          <p>blacky blacky is my favorite shirt. Udah hampir tiap hari nih keknyaa bikin video Tiktok yahh</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/BQaDsfo3Q-s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="9-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Kontrak TikTok</h3>
          <p>Kontrak tiktok __HabShah__ yang terjadi karena pengen ngelucu ke yang lain, tapi malah gabisa diganti. Tapi aku bersyukur waktu itu gabisa diganti karena kita semakin sering TikTokan dan menjadi semakin dekat hehehehhe</p>
          <img src={habshah} className="image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="10-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 11</h3>
          <p>FIRST DEBUT HABSHAH!!!!!! Coba tebak video ini bakal diremake dimanaa WKWKWKWKWKKW, kenapa remake video yang ini yahhh pdahal ada papicullo</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/tdH6uqfxfqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="11-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 12</h3>
          <p>HAHAHHAHAHHA GATAU MALU BANGETT LAUU ANJINGGGG!!! aku jugaa sihh wkwkkwkwk, TAPII SERU BANGET SIHH TIKTOKan di tengahh jalan gtuu, ada sensasinyaaa wkwkkwkkwkwkkwkw</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/gcBq9cCXMmg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="14-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 13</h3>
          <p>"Sa, cobain sekali TikToknya jangan senyum", "Gabisaa Habb", "Bisa ayo bisa". Trus yang pertamaa ketawa akuu wkwkkwkkwkwkkw, emang susah deh kalau disuruh TikTokAn ga senyumm</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/B8WM6JeHaj4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="16-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Meme Sekolah</h3>
          <p>Kok konten ini ga diupload2 yahh di IG Eduka HAHAHHAHA, biar bucinnya sampaii orang daerahh lain tauuuuu hihihihi. INI ULAH RAUF YAAAA!!!</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/KSvwnp20u9M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="17-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Situ Patenggang</h3>
          <p>First time aku sukaa kamu atau aku yakin suka kamuu yahh WKKWKWKW GATAUU AHHH AKU IKANN. Intinyaa mulaii hari ituu, aku merasa nyaman banget kalau deket sama kamuu, kek pengenn bareng kamuu trus pagi siang malam pagi lagi WKWKKW DASAR HABIBI BUCINN. TAPI DISITUU KITA GAK SEMPET TIKTOKAN HUHUHUHU SOW SADDD</p>
          <img src={situpatenggang} className="image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="17-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 14</h3>
          <p>CRINGE CRINGE CRINGE CRINGE CRINGE CRINGE CRINGE CRINGE. But i really like the view and youuu hehheee</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/FWlxkcPzFaY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="19-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Video Tiktok 15</h3>
          <p>Transisinyaa bagus banget yaa, sempurnaa bangett seperti transisi transisi orang India:)). Tapi sayangnyaa video ini ga viral karena ga diupload, menghindari hujatan hujatan bocah bocah follower habshah:(</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/ucz4GtHwwoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="19-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Cover Lagu</h3>
          <p>Pertamaa kalinyaaa kita cover laguuu, DAN LU CUMA MAU NYANYI KALAU GUA JUGA IKUT NYANYII, SADD:(( udah dibilangin suara gua tuh fals bangett, tapii gapapa lah yah sekali2 ngecover lguuu, masihh mau sih sebenarnyaa</p>
          <iframe className="video" width="80%" height="300" src="https://www.youtube.com/embed/kHP5nWcW-wA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="31-10-2020"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<GiLoveLetter />}
        >
          <h3 className="vertical-timeline-element-title">Jalan-Jalan ke Garut</h3>
          <p className="vertical-timeline-element-subtitle">Kita jalan-jalan ke garut yang penuh tantangan nan bahaya WKWKWKWK. Meskipun pantainya kurang banget dan udara disana ga enak banget bikin keringat terus, tapi aku gatau kenapa tetap senang dan kalau diajak kesana lagi aku masih sangat mauu hehehhee.</p>
          <img src={garut} className="image"/>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default App;
