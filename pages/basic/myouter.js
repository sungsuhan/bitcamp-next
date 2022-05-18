import React from "react";
import tableStyles from '@/styles/Table.module.css'

export default function MyOuter() {

    return(
      
      
      <div>
      한성수님의 아우터 옷장
      <label><input type="submit" value="아우터 추가" /></label>
      <table className={tableStyles.table}>
          <tbody>
      <tr>
      
      
      <td>
      <img style={{width:180}} src="http://img.danawa.com/prod_img/500000/344/588/img/15588344_1.jpg?shrink=330:330&_v=20211103112349" alt="logo"/>
      </td>

      <td>
      <img style={{width:180}} src="https://www.siminilbo.co.kr/news/data/20151211/p179552994522588_213.jpg" alt="logo"/>
      </td>

      <td>
      <img style={{width:180}} src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg" alt="logo"/>
      </td>

      <td>
      <img style={{width:180}} src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg" alt="logo"/>
      </td>


     



      
      </tr>






        </tbody>
      </table>
      </div>
    )
}