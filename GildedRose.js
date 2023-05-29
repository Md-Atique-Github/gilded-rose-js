
class GildedRose {
    constructor(name, quality, daysRemaining) {
      this.name = name;
      this.quality = quality;
      this.daysRemaining = daysRemaining;
    }
  
    tick() {
      if (this.name === 'Aged Brie') {
        this.updateAgedBrie();
      } else if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstagePasses();
      } else if (this.name !== 'Sulfuras, Hand of Ragnaros') {
        this.updateNormalItem();
      }
  
      if (this.name !== 'Sulfuras, Hand of Ragnaros') {
        this.daysRemaining -= 1;
      }
  
      if (this.daysRemaining < 0) {
        this.updateExpiredItem();
      }
    }
  
    updateAgedBrie() {
      if (this.quality < 50) {
        this.quality += 1;
      }
    }
  
    updateBackstagePasses() {
      if (this.quality < 50) {
        this.quality += 1;
  
        if (this.daysRemaining < 11 && this.quality < 50) {
          this.quality += 1;
        }
  
        if (this.daysRemaining < 6 && this.quality < 50) {
          this.quality += 1;
        }
      }
    }
  
    updateNormalItem() {
      if (this.quality > 0) {
        this.quality -= 1;
      }
    }
  
    updateExpiredItem() {
      if (this.name !== 'Aged Brie') {
        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
        if (this.name !== 'Backstage passes to a TAFKAL80ETC concert'){
          if (this.quality > 0) {
            this.quality -= 1;
          }
        } else {
          this.quality = 0;
        }
      }} else {
        if (this.quality < 50) {
          this.quality += 1;
        }
      }
    }
  }
  
  
  

module.exports = GildedRose;