import React from 'react';
import FirstPlayer from '../Player/FirstPlayer';
import SecondPlayer from '../Player/SecondPlayer';
import './GamePage.css';
import maleChar from '../Player/img/male-mage.png';
import femaleChar from '../Player/img/female-mage.webp';
import Players from '../Player/Players';

function GamePage() {
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';

  // const firstUrl = 'https://yandex-images.clstorage.net/Mhc53p135/6f6d550yOS4/qokeAhD_Pp1l6kpjiVYvzYc9xLPZEEFZ7yIvXgk2JouVgneXfi3VHmb2dV28U_A4eDEr_zJe2UE6NIegYgxgvHpLmdGRuivOMPuav99WKp7U6NLmGNYGTHomaIvI52BZgUFsg-4pxgpwYm5f_RM387K57GL8lJUe5qpYMzaOYL3oTAlUn3Vu2mGuBfBJ2SnfBf1E81EUkNoqYb2UTnl8CVADtVWz5wKL_6Ghw20Cb7h3_6fm8RqSGGtlH33-SCw_bt1BkBG8tZLuoES9Sd2plIK3zjBa2NJXaqKwHwS5OExYzPKfPugKwLJiY4soTeFxMD1lZHidmV7iIxe3ckTj-qRez5ycejXZJ29NPoic4N8EcUG7lhuRUyrluhnNsLYB18SwlLynBEc95uFJZIKo-Xh35aK619JU7mwRNvhL5f6nmQcaUb98GmmtR7mJ3m8aibfDs5CdH9evJbVdQrD3C5ZNcNDx5YwAMiugSKKCL3i7NW4ovp5a36rlWD6_Tqy-pZQHklW4c5GhIwq6AVoiU8ozzrIQ0pofJa93GsK5OY_Rw_VauWYKA_Bp4s9lyuF4tLwgLH3VVFHiKRj8O8jtdmcfQNrbdjPdYyxGes9WqZ7JM8a-ntpam6gv_hbL-X2G14E9E_Whzgvz72UC5YUt9zC07WuykpOXLyoXeDLEZ7LmFwlZUTg4muAsDvCBXuaezTkBOpWdkhvj5XmWAXe0iV0N-5o4qcJG-KFjQ2POrzT28Wjr_1ZaHeHkGT84xGW3ohQAHFr5OpDnpoj7SNLtGo88zvIVG9lbbCp-VcJ3vUBRz_AQc6hFx7AorwjlxC_xdToiLHHfH58lalU-9MYoOS6WhlsU_3sb7CzHu4ueL5TKewFzGdTRluTjfl7EsD-F2Az20DYpCwL-Ku2CqIPnevh7oefznVcdJaoatL8MrXWlVc-aFff-k6ltzHYLmmHejTPOsRjb2Rqm7XZVQc';
  // const secondUrl = 'https://i.pinimg.com/736x/de/06/2d/de062d3f776e29ee315c1ae28532282e--necromancer-fantasy-art.jpg';

  return (
    <div className="game-page-container">
      <Players />

      {/* <div>
        <FirstPlayer url={femaleChar} />
        <button className="mt-5" type="button">КНОПКА</button>
      </div>
      <div>
        <SecondPlayer url={maleChar} />
        <button type="button">КНОПКА</button>
      </div> */}
    </div>
  );
}

export default GamePage;
