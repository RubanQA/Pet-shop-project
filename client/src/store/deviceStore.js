import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [

      { id: 1, name: "Cellphones" },
      { id: 2, name: "Computers" },
      { id: 3, name: "TV" },
      { id: 4, name: "Fridges" }

    ]
    this._brands = [
      { id: 1, name: "Apple" },
      { id: 8, name: "Samsung" }

    ]
    this._devices = [

      { id: 1, name: "Apple 11 Pro", price: 650000, rating: 5 },
      { id: 8, name: "Samsung", price: 400000, rating: 4 }

    ]

    this._selectedTypes = {}
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }
  setSelectedTypes(type) {
    this._selectedTypes = type;
  }

  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
}
}