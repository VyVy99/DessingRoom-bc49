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

const tryOnProduct = (id) => {
    console.log(product);
    const tabPanes = Data.tabPanes;

    for (let i = 0; i < tabPanes.length; i++) {
        if (tabPanes[i].id === id) {
            const { id, type, name, desc, imgSrc_jpg, imgSrc_png } = tabPanes[i];
            product = new Product(id, type, name, desc, imgSrc_jpg, imgSrc_png);
            break;
        }
    }

    console.log("Đã mặc thử sản phẩm có ID: ", productId);

    document.querySelectorAll(".col-md-4 .background").style.backgroundImage = `url(./../images/background/${product.imgSrc_jpg})`;

    RenderNavPills()

};





