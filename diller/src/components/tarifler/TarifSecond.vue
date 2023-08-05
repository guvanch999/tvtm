<template>
  <div class="container">
    <div class="cards_container">
      <base-card class="card" mode="card-blue">
        <h1>Standart</h1>
        <div class="card-info">
          <div class="card-plan">
            BIR AÝ
            <span class="card-price price-1">
              <span>40</span>
              <span class="span">TMT</span>
            </span>
          </div>

          <div class="card-plan thick">
            BIR ÝYL
            <span class="card-price price-1">
              <span>432</span>
              <span class="span">TMT</span>
            </span>
          </div>
        </div>

        <p>
          Biziň ulanyjylarymyz üçin aýratynlyklarymyz, hiliň ýokarylygy we
          köpdürliligi bilen tapawutlanýar
        </p>

        <ul>
          <li>
            <img src="../../assets/Check-blue.png" alt="Check image" />
            <h1>SD + HD hilli 120 kanal</h1>
          </li>
          <li>
            <img src="../../assets/Check-blue.png" alt="Check image" />
            <h1>Çagalar üçin 5 kanal</h1>
          </li>
          <li>
            <img src="../../assets/Check-blue.png" alt="Check image" />
            <h1>Kinofilm üçin 12 kanal</h1>
          </li>
          <li>
            <img src="../../assets/Check-blue.png" alt="Check image" />
            <h1>7 sany sport kanallary</h1>
          </li>
          <li>
            <img src="../../assets/Check-blue.png" alt="Check image" />
            <h1>12 gündelik kanallary</h1>
          </li>
          <li>
            <img src="../../assets/Check-blue.png" alt="Check image" />
            <h1>20 HD hilli kanallar</h1>
          </li>
          <li>
            <img src="../../assets/Check-blue.png" alt="Check image" />
            <h1>We başgada dürli daşary ýurt kanallary</h1>
          </li>
        </ul>
      </base-card>

      <base-card class="card" mode="card-gold">
        <h1>Premium</h1>
        <div class="card-info">
          <div class="card-plan">
            BIR AÝ
            <span class="card-price price-2">
              <span>50</span>
              <span class="span">TMT</span>
            </span>
          </div>

          <div class="card-plan thick">
            BIR ÝYL
            <span class="card-price price-2">
              <span>540</span>
              <span class="span">TMT</span>
            </span>
          </div>
        </div>
        <p>
          Biziň ulanyjylarymyz üçin aýratynlyklarymyz, hiliň ýokarylygy we
          köpdürliligi bilen tapawutlanýar
        </p>
        <ul>
          <li>
            <img src="../../assets/Check-gold.png" alt="Check image" />
            <h1>SD + HD hilli 135 kanal</h1>
          </li>
          <li>
            <img src="../../assets/Check-gold.png" alt="Check image" />
            <h1>Çagalar üçin 7 kanal</h1>
          </li>
          <li>
            <img src="../../assets/Check-gold.png" alt="Check image" />
            <h1>Kinofilm üçin 15 kanal</h1>
          </li>
          <li>
            <img src="../../assets/Check-gold.png" alt="Check image" />
            <h1>10 sany sport kanallary</h1>
          </li>
          <li>
            <img src="../../assets/Check-gold.png" alt="Check image" />
            <h1>15 gündelik kanallary</h1>
          </li>
          <li>
            <img src="../../assets/Check-gold.png" alt="Check image" />
            <h1>30 HD hilli kanallar</h1>
          </li>
          <li>
            <img src="../../assets/Check-gold.png" alt="Check image" />
            <h1>We başgada dürli daşary ýurt kanallary</h1>
          </li>
        </ul>
      </base-card>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Mulish";
}

.cards_container {
  width: 70%;
  display: flex;
}

.card-info {
  display: flex;
}
.card {
  display: flex;
  flex-direction: column;
}

.card-plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 24px;
  line-height: 34px;
}

.card-price {
  font-size: 30px;
  line-height: 51px;
}
.container ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.container li {
  display: flex;
  gap: 50px;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
}

.container p {
  font-weight: 400;
  line-height: 22px;
  padding: 20px 10px;
  color: #777;
  border-bottom: 2px solid #ddd;
}
.span {
  margin-left: 20px;
  color: #777;
}

.card-price.price-1 {
  color: #3d5cb7;
}

.card-price.price-2 {
  color: #cbb600;
}

.card-plan.thick {
  border-left: 2px solid #ddd;
}

.container button {
  margin-top: 15px;
}

@media (width<=1450px) {
  .cards_container {
    display: block;
  }
  @media (width<=550px) {
    .card-plan {
      padding: 15px;
      font-size: 20px;
    }
    .card-price {
      font-size: 25px;
    }
    .container li {
      gap: 30px;
      font-size: 10px;
    }
    @media (width<=450px) {
      .card-plan {
        font-size: 18px;
        padding: 10px;
      }
      .card-price {
        font-size: 20px;
      }
      .container p {
        padding: 15px 10px;
        font-size: 14px;
      }
      .container li {
        font-size: 8px;
      }
      @media (width<=380px) {
        .card-plan {
          padding: 8px;
        }
        .container p {
          font-size: 12px;
        }
        @media (width<=370px) {
          .card {
            padding: 25px;
          }
          .card-plan {
            padding: 5px;
          }
          .container p {
            font-size: 10px;
          }
          .container li {
            gap: 15px;
          }
          .span {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
