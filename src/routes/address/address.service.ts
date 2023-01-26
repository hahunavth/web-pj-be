import { Injectable } from '@nestjs/common';
import * as cities from './constant/cities.json';
import * as districts from './constant/districts.json';
import * as wards from './constant/wards.json';
import { City, District, Ward } from './constant/type';

@Injectable()
export class AddressService {
  async getCities() {
    return cities as City[];
  }

  async getDistricts(cityId: number) {
    return (districts as District[]).filter(
      (district) => parseInt(district.parent_code) === cityId,
    );
  }

  async getWards(districtId: number) {
    return (wards as Ward[]).filter(
      (ward) => parseInt(ward.parent_code) === districtId,
    );
  }

  async getCityByCode(cityId: number) {
    return (cities as City[]).find((city) => parseInt(city.code) === cityId);
  }

  async getDistrictByCode(districtId: number) {
    return (districts as District[]).find(
      (district) => parseInt(district.code) === districtId,
    );
  }

  async getWardByCode(wardId: number) {
    return (wards as Ward[]).find((ward) => parseInt(ward.code) === wardId);
  }

  async validateCityId(cityId: number) {
    return cities.some((city) => parseInt(city.code) === cityId);
  }

  async validateDistrictId(districtId: number) {
    return districts.some((district) => parseInt(district.code) === districtId);
  }

  async validateWardId(wardId: number) {
    return wards.some((ward) => parseInt(ward.code) === wardId);
  }

  async getStringAddress(
    cityCode: number,
    districtCode: number,
    wardCode: number,
  ) {
    const city = await this.getCityByCode(cityCode);
    const district = await this.getDistrictByCode(districtCode);
    const ward = await this.getWardByCode(wardCode);

    if (!city || !district || !ward) {
      return null;
    }

    return `${city.name}, ${district.name}, ${ward.name}`;
  }
}
