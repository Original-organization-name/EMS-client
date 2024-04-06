/**
 * EMS.Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Address } from './address';
import { PaymentMethod } from './paymentMethod';
import { Gender } from './gender';
import { Contact } from './contact';


export interface Employee { 
    name?: string | null;
    surname?: string | null;
    pesel?: string | null;
    nip?: string | null;
    birthdate?: string | null;
    gender?: Gender;
    address?: Address;
    contacts?: Array<Contact> | null;
    paymentMethod?: PaymentMethod;
}
export namespace Employee {
}

