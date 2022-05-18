import React from "react";
import tableStyles from '@/styles/Table.module.css'

export default function MyShoes() {

    return(
      
      
      <div>
      한성수님의 신발장
      <label><input type="submit" value="신발 추가" /></label>
      <table className={tableStyles.table}>
          <tbody>
      <tr>
      
      
      <td>
      <img style={{width:180}} src="https://static.coupangcdn.com/image/retail/images/2020/01/28/17/8/c575af26-aace-474f-b290-14d8abdae656.jpg" alt="logo"/>
      </td>

      <td>
      <img style={{width:180}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySjzSeGP64agOMZKe5eYd9s5W4vchm8ZnUQ&usqp=CAU" alt="logo"/>
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