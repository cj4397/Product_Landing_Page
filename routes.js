
const cart = [];

const main = {
  item1: {
    modal: '#Pmodal1',
    position: 'poster1',
    content: 'content1',
    submit: 'submit1',
    parameter: {
      size: 'size1',
      framed: 'framed1',
      btn1: 'small1',
      btn2: 'big1',
      btn3: 'without1',
      btn4: 'with1',
    },
    id: 'one',
    name: 'Star Guardian 2022 Wild Rift Key Visual Poster',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Commemorate a new wave of Star Guardians with this Star Guardian 2022 Wild Rift key visual poster!',
      two: 'Framed poster options use a dark wood material with plastic cover.',

    },
    image: 'assets/item1.webp',
    size: {
      SmallFramed: 'assets/swith1.jpg',
      SmallUnframed: 'assets/swithout1.jpg',
      BigFramed: 'assets/bwith1.jpg',
      BigUnframed: 'assets/bwithout1.jpg',
    },
  },
  item2: {
    modal: '#Pmodal2',
    position: 'poster2',
    content: 'content2',
    submit: 'submit2',
    parameter: {
      size: 'size2',
      framed: 'framed2',
      btn1: 'small2',
      btn2: 'big2',
      btn3: 'without2',
      btn4: 'with2',
    },
    id: 'two',
    name: 'Star Guardian 2022 League of Legends China Key Visual Poster',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Commemorate the clash for the cosmos between the Star Guardians and the Star Nemeses with this Star Guardian 2022 League of Legends China key visual poster!',
      two: 'Framed poster options use a dark wood material with plastic cover.',
    },
    image: 'assets/item2.webp',
    size: {
      SmallFramed: 'assets/swith2.jpg',
      SmallUnframed: 'assets/swithout2.jpg',
      BigFramed: 'assets/bwith2.jpg',
      BigUnframed: 'assets/bwithout2.jpg',
    },
  },
  item3: {
    modal: '#Pmodal3',
    position: 'poster3',
    content: 'content3',
    submit: 'submit3',
    parameter: {
      size: 'size3',
      framed: 'framed3',
      btn1: 'small3',
      btn2: 'big3',
      btn3: 'without3',
      btn4: 'with3',
    },
    id: 'three',
    name: 'Star Guardian 2022 League of Legends Key Visual Poster',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Commemorate the awakening of a new Star Guardian team with this Star Guardian 2022 League of Legends key visual poster!',
      two: 'Framed poster options use a dark wood material with plastic cover.',
    },
    image: 'assets/item3.webp',
    size: {
      SmallFramed: 'assets/swith3.jpg',
      SmallUnframed: 'assets/swithout3.jpg',
      BigFramed: 'assets/bwith3.jpg',
      BigUnframed: 'assets/bwithout3.jpg',
    },
  },
  item4: {
    modal: '#Pmodal4',
    position: 'poster4',
    content: 'content4',
    submit: 'submit4',
    parameter: {
      size: 'size4',
      framed: 'framed4',
      btn1: 'small4',
      btn2: 'big4',
      btn3: 'without4',
      btn4: 'with4',
    },
    id: 'four',
    name: 'Star Guardian 2022 Manga Group Battle Key Visual Poster',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Commemorate the epic clash between the Star Guardians and Star Nemesis Morgana and Fiddlesticks in this manga-styled key visual poster!',
      two: 'Framed poster options use a dark wood material with plastic cover.',
    },
    image: 'assets/item4.webp',
    size: {
      SmallFramed: 'assets/swith4.jpg',
      SmallUnframed: 'assets/swithout4.jpg',
      BigFramed: 'assets/bwith4.jpg',
      BigUnframed: 'assets/bwithout4.jpg',
    },
  },
  item5: {
    modal: '#Pmodal5',
    position: 'poster5',
    content: 'content5',
    submit: 'submit5',
    parameter: {
      size: 'size5',
      framed: 'framed5',
      btn1: 'small5',
      btn2: 'big5',
      btn3: 'without5',
      btn4: 'with5',
    },
    id: 'five',
    name: 'Sona Posters',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Give that wall of yours some love with the stunning League of Legends artwork of Sona.',
      two: 'Framed poster options use a dark wood material with plastic cover.',

    },
    image: 'assets/item5.jpg',
    size: {
      SmallFramed: 'assets/swith5.jpg',
      SmallUnframed: 'assets/swithout5.jpg',
      BigFramed: 'assets/bwith5.jpg',
      BigUnframed: 'assets/bwithout5.jpg',
    },
  },
  item6: {
    modal: '#Pmodal6',
    position: 'poster6',
    content: 'content6',
    submit: 'submit6',
    parameter: {
      size: 'size6',
      framed: 'framed6',
      btn1: 'small6',
      btn2: 'big6',
      btn3: 'without6',
      btn4: 'with6',
    },
    id: 'six',
    name: 'Neeko Posters',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Decorate your room with League of Legends splash art featuring Neeko, the Curious Chameleon.',
      two: 'Framed poster options use a dark wood material with plastic cover.',

    },
    image: 'assets/item6.jpg',
    size: {
      SmallFramed: 'assets/swith6.jpg',
      SmallUnframed: 'assets/swithout6.jpg',
      BigFramed: 'assets/bwith6.jpg',
      BigUnframed: 'assets/bwithout6.jpg',
    },
  },
  item7: {
    modal: '#Pmodal7',
    position: 'poster7',
    content: 'content7',
    submit: 'submit7',
    parameter: {
      size: 'size7',
      framed: 'framed7',
      btn1: 'small7',
      btn2: 'big7',
      btn3: 'without7',
      btn4: 'with7',
    },
    id: 'seven',
    name: 'Taliyah Posterss',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Decorate your room with League of Legends splash art featuring Taliyah, the Stoneweaver.',
      two: 'Framed poster options use a dark wood material with plastic cover.',

    },
    image: 'assets/item7.jpg',
    size: {
      SmallFramed: 'assets/swith7.jpg',
      SmallUnframed: 'assets/swithout7.jpg',
      BigFramed: 'assets/bwith7.jpg',
      BigUnframed: 'assets/bwithout7.jpg',
    },
  },
  item8: {
    modal: '#Pmodal8',
    position: 'poster8',
    content: 'content8',
    submit: 'submit8',
    parameter: {
      size: 'size8',
      framed: 'framed8',
      btn1: 'small8',
      btn2: 'big8',
      btn3: 'without8',
      btn4: 'with8',
    },
    id: 'eight',
    name: 'Lulu Posters',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Decorate your room with League of Legends splash art featuring Lulu, the Fae Sorceress.',
      two: 'Framed poster options use a dark wood material with plastic cover.',

    },
    image: 'assets/item8.jpg',
    size: {
      SmallFramed: 'assets/swith8.jpg',
      SmallUnframed: 'assets/swithout8.jpg',
      BigFramed: 'assets/bwith8.jpg',
      BigUnframed: 'assets/bwithout8.jpg',
    },
  },
  item9: {
    modal: '#Pmodal9',
    position: 'poster9',
    content: 'content9',
    submit: 'submit9',
    parameter: {
      size: 'size9',
      framed: 'framed9',
      btn1: 'small9',
      btn2: 'big9',
      btn3: 'without9',
      btn4: 'with9',
    },
    id: 'nine',
    name: "Kai'Sa Posters",
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: "Decorate your room with League of Legends splash art featuring Kai'Sa, Daughter of the Void.",
      two: 'Framed poster options use a dark wood material with plastic cover.',

    },
    image: 'assets/item9.jpg',
    size: {
      SmallFramed: 'assets/swith9.jpg',
      SmallUnframed: 'assets/swithout9.jpg',
      BigFramed: 'assets/bwith9.jpg',
      BigUnframed: 'assets/bwithout9.jpg',
    },
  },
  item10: {
    modal: '#Pmodal10',
    position: 'poster10',
    content: 'content10',
    submit: 'submit10',
    parameter: {
      size: 'size10',
      framed: 'framed10',
      btn1: 'small10',
      btn2: 'big10',
      btn3: 'without10',
      btn4: 'with10',
    },
    id: 'ten',
    name: 'Lux Posters',
    price: '$22.00-$110.00',
    option: {
      size: {
        small: 'Small',
        big: 'Big',
      },
      framed: {
        yes: 'Framed',
        no: 'Unframed',
      }
    },
    description: {
      one: 'Decorate your room with League of Legends splash art featuring Lux, the Lady of Luminosity.',
      two: 'Framed poster options use a dark wood material with plastic cover.',

    },
    image: 'assets/item10.jpg',
    size: {
      SmallFramed: 'assets/swith10.jpg',
      SmallUnframed: 'assets/swithout10.jpg',
      BigFramed: 'assets/bwith10.jpg',
      BigUnframed: 'assets/bwithout10.jpg',
    },
  },
  style: {
    poster: function() {
      let x = main;
      var size;
      var frame;


      for (let i in x) {
        let img = document.createElement('img');
        let main = document.getElementById(x[i].position);
        let item = document.createElement('div');

        img.setAttribute("src", x[i].image)
        img.classList.add('card-img-top');
        item.classList.add('card', 'h-100', 'border-gold', 'bg-transparent');

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let head = document.createElement('h5');
        let price = document.createElement('p');
        head.textContent = x[i].name;
        price.textContent = x[i].price;
        head.classList.add('fw-bolder');
        div2.append(head, price);
        div2.classList.add('text-center');
        div1.append(div2);
        div1.classList.add('card-body', 'p-1')


        let a = document.createElement('button');
        let b = document.createElement('div');
        let c = document.createElement('div');

        a.classList.add('btn', 'bg-magic', 'border-gold', 'mt-auto')
        a.textContent = 'View details'
        a.type = 'button'
        a.dataset.bsToggle = "modal";
        a.dataset.bsTarget = x[i].modal

        b.append(a);
        b.classList.add('text-center');
        c.append(b);
        c.classList.add('card-footer', 'p-4', 'pt-0', 'border-top-0', 'bg-transparent')
        item.append(img, div1, c)

        main.append(item);
        main.setAttribute('item', i)


        document.getElementById(i).innerHTML = x[i].name;
        let content = document.getElementById(x[i].content);
        content.classList.add('row');

        let imgc = document.getElementById('imgc' + x[i].id);
        imgc.classList.add('col-md-9');
        let cond = document.getElementById('cond' + x[i].id);
        cond.classList.add('col-md-3', 'my-auto');


        let iimg1 = document.getElementById(x[i].id + '1');
        let iimg2 = document.getElementById(x[i].id + '2');
        let iimg3 = document.getElementById(x[i].id + '3');
        let iimg4 = document.getElementById(x[i].id + '4');
        let iimg5 = document.getElementById(x[i].id + '5');


        iimg1.setAttribute("src", x[i].image);
        iimg2.setAttribute("src", x[i].size.SmallUnframed);
        iimg3.setAttribute("src", x[i].size.SmallFramed);
        iimg4.setAttribute("src", x[i].size.BigUnframed);
        iimg5.setAttribute("src", x[i].size.BigFramed);




        let details = document.createElement('h4');
        details.textContent = 'DETAILS';
        let des1 = document.createElement('p');
        des1.textContent = x[i].description.one;
        let des2 = document.createElement('p');
        des2.textContent = x[i].description.two;
        let desc = document.createElement('div');
        desc.append(details, des1, des2);

        let hr = document.createElement('hr')
        hr.classList.add('border', 'mb-5', 'border-primary', 'border-3', 'opacity-75');

        let priced = document.createElement('div');
        let smalld = document.createElement('div');
        let bigd = document.createElement('div');
        let small = document.createElement('h4');
        let smallw = document.createElement('p');
        let smallwo = document.createElement('p');
        let big = document.createElement('h4');
        let bigw = document.createElement('p');
        let bigwo = document.createElement('p');
        small.innerText = 'Small(12 x 18)'
        big.innerText = 'Big(24 x 36)'
        smallw.innerHTML = 'Small with <b>NO</b> frame = <b>$22.00</b>'
        smallwo.innerHTML = 'Small with frame = <b>$55.00</b>'
        bigw.innerHTML = 'Big with <b>NO</b> frame = <b>$28.00</b>'
        bigwo.innerHTML = 'Big with frame = <b>$110.00</b>'

        smalld.append(small, smallw, smallwo);
        bigd.append(big, bigw, bigwo);
        priced.classList.add('mb-5')
        priced.append(smalld, bigd)

        let size = document.createElement('div');
        let poster = document.createElement('h4');
        poster.innerHTML = 'POSTER SIZE';

        let btn1 = document.createElement('input');
        let label1 = document.createElement('label');
        let btnc1 = document.createElement('div');
        btn1.setAttribute('type', 'radio');
        btn1.setAttribute('name', x[i].parameter.size);
        btn1.setAttribute('autocomplete', 'off');
        btn1.setAttribute('checked', true);

        btn1.id = x[i].parameter.btn1;
        btn1.value = x[i].option.size.small;

        btn1.classList.add('btn-check')

        label1.setAttribute('for', x[i].parameter.btn1);
        label1.classList.add('btn', 'btn-outline-primary', 'me-1');
        label1.innerHTML = x[i].option.size.small + ': 12 x 18';




        btn1.classList.add('btn', 'btn-primary');



        let btn2 = document.createElement('input');
        let label2 = document.createElement('label');
        btn2.setAttribute('type', 'radio');
        btn2.setAttribute('name', x[i].parameter.size);
        btn2.setAttribute('autocomplete', 'off');

        btn2.id = x[i].parameter.btn2;
        btn2.value = x[i].option.size.big;
        btn2.classList.add('btn-check')
        label2.setAttribute('for', x[i].parameter.btn2);
        label2.classList.add('btn', 'btn-outline-primary');
        label2.innerHTML = x[i].option.size.big + ': 24 x 36';



        let FRAMED = document.createElement('div');
        let frame = document.createElement('h4');
        frame.innerHTML = 'FRAMED';

        let btn3 = document.createElement('input');
        let label3 = document.createElement('label');
        let btnc2 = document.createElement('div');
        let btn4 = document.createElement('input');
        let label4 = document.createElement('label');

        btn3.setAttribute('type', 'radio');
        btn3.setAttribute('name', x[i].parameter.framed);
        btn3.setAttribute('autocomplete', 'off');
        btn3.setAttribute('checked', true);
        btn3.id = x[i].parameter.btn3;
        btn3.value = x[i].option.framed.no;
        btn3.classList.add('btn-check')
        label3.setAttribute('for', x[i].parameter.btn3);
        label3.classList.add('btn', 'btn-outline-primary', 'me-5');
        label3.innerHTML = x[i].option.framed.no;

        btn4.setAttribute('type', 'radio');
        btn4.setAttribute('name', x[i].parameter.framed);
        btn4.setAttribute('autocomplete', 'off');

        btn4.id = x[i].parameter.btn4;
        btn4.value = x[i].option.framed.yes;

        btn4.classList.add('btn-check')

        label4.setAttribute('for', x[i].parameter.btn4);
        label4.classList.add('btn', 'btn-outline-primary');
        label4.innerHTML = x[i].option.framed.yes;


        btnc1.append(btn1, label1, btn2, label2);
        btnc2.append(btn3, label3, btn4, label4);

        size.append(poster, btnc1);
        FRAMED.append(frame, btnc2)

        cond.append(desc, hr, priced, size, FRAMED);




        let submit = document.createElement("button");
        submit.id = x[i].id;
        submit.setAttribute('name', x[i].name);
        submit.setAttribute('SmallUnframed', x[i].size.SmallUnframed);
        submit.setAttribute('SmallFramed', x[i].size.SmallFramed);
        submit.setAttribute('BigUnframed', x[i].size.BigUnframed);
        submit.setAttribute('BigFramed', x[i].size.BigFramed);
        submit.classList.add('btn', 'btn-primary');
        submit.setAttribute('size', 'input[name =' + x[i].parameter.size + ']:checked');
        submit.setAttribute('framed', 'input[name =' + x[i].parameter.framed + ']:checked');
        let subcon = document.getElementById(x[i].submit);

        submit.innerHTML = 'Add Cart';


        submit.onclick = (e) => {
          let x = document.getElementById(e.target.id);
          let first = x.getAttribute('size');
          let second = x.getAttribute('framed');

          let size = document.querySelector(first).value
          let framed = document.querySelector(second).value
          let z = size + framed;
          let y = x.getAttribute(z);
          let price;

          switch (true) {
            case (z == 'SmallUnframed'):
              price = '$22.00'
              break;
            case (z == 'SmallFramed'):
              price = '$55.00'
              break;
            case (z == 'BigUnframed'):
              price = '$28.00'
              break;
            case (z == 'BigFramed'):
              price = '$110.00'
              break;
          }



          let buy = {
            name: x.getAttribute('name'),
            pic: y,
            price: price,
          };

          cart.push(buy)
          alert("The item has been added to your cart!");
          add(cart.length);

        }

        subcon.append(submit);

      };
    },


  },
};


let cart_content = document.getElementById('cart-content')
let content = document.getElementById('Mcartc');


function add(x) {
  function y(x) {
    return x++
  };
  let container = document.createElement('div');
  let card = document.createElement('div');
  let details = document.createElement('div');
  let text = document.createElement('div');
  let footer = document.createElement('div');
  let name = document.createElement('h2');
  let pic = document.createElement('img');
  let btn = document.createElement('button');
  let price = document.createElement('h4');
  pic.classList.add('img-fluid')


  for (let i = 0; i < cart.length; i++) {

    btn.onclick = function(e) {
      let x = e.target.getAttribute('num')
      cart.splice(x, 1);
      let y = e.target.getAttribute('id')
      document.getElementById(y).remove()
      let content = parseInt(cart_content.innerHTML);
      cart_content.innerHTML = content - 1



      alert('Item has been removed')
      console.log(cart)
    };

    btn.textContent = 'Remove item'
    name.textContent = cart[i].name;
    pic.setAttribute("src", cart[i].pic);

    price.textContent = cart[i].price;

    btn.setAttribute("id", 'name' + i);
    btn.setAttribute("num", i);

    card.classList.add('card', 'h-100', 'border-gold');
    details.classList.add('card-body', 'p-3');
    text.classList.add('text-center');
    price.classList.add('fw-bolder', 'border-bottom', 'border-top', 'border-3', 'border-danger');
    footer.classList.add('card-footer', 'text-center', 'p-3', 'pt-0', 'border-top-0', 'bg-transparent');
    btn.classList.add('btn', 'btn-danger');
    container.classList.add('m-3');

    footer.append(btn)
    text.append(name, price)
    details.append(text)
    card.append(pic, details, footer)
    container.append(card);


    container.id = 'name' + i;


    content.append(container)
  }
  return cart_content.innerHTML = y(x)
}



function cartC() {








}

document.addEventListener("DOMContentLoaded", () => {
  main.style.poster();

});
