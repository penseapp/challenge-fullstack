package database

import (
	"time"

	"gorm.io/gorm"
)

type Store struct {
	ID          uint   `gorm:"primaryKey"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Products    []Product
	CreatedAt   time.Time
	UpdatedAt   time.Time
	DeletedAt   gorm.DeletedAt `gorm:"index"`
}

type Product struct {
	ID             uint   `gorm:"primaryKey;not null"`
	Name           string `json:"name" gorm:"not null"`
	Description    string `json:"description"`
	Price          int    `json:"price"`
	PromotialPrice int    `json:"promotial_price"`
	StatusFlag     string `json:"status_flag"`
	Category       string `json:"category"`
	StoreID        uint   `json:"store_id"`
	CreatedAt      time.Time
	UpdatedAt      time.Time
	DeletedAt      gorm.DeletedAt `gorm:"index"`
}

func Migrate(db *gorm.DB) {
	db.Debug().AutoMigrate(&Store{}, &Product{})
}
