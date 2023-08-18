// @ts-nocheck

import Data from "../data/Data.json" assert { type: 'json' };
import { ProductType } from "../models/index.js";


const RenderNavPills = () => {
    let content = ""
    const NavPills = Data.navPills
    for (let index = 0; index < NavPills.length; index++) {
        const productType = new ProductType()

        for (const key in NavPills[index]) {

            productType[key] = NavPills[index][key]// == value
        }
        console.log(productType);

        if (index === 0) { // index chinh la ob, key la thuoc tinh
            content += `
                    <li class="nav-item">
              <a class="nav-link active" href="#">${productType.showName}</a>
            </li>
        `
        } else {
            content += `
                    <li class="nav-item">
              <a class="nav-link " href="#">${productType.showName}</a>
            </li>
        `
        }
    }
    document.getElementById("nav-pills").innerHTML = content
}
RenderNavPills();
