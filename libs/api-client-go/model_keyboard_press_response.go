/*
Daytona

Daytona AI platform API Docs

API version: 1.0
Contact: support@daytona.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package apiclient

import (
	"bytes"
	"encoding/json"
	"fmt"
)

// checks if the KeyboardPressResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &KeyboardPressResponse{}

// KeyboardPressResponse struct for KeyboardPressResponse
type KeyboardPressResponse struct {
	Success   bool     `json:"success"`
	Key       string   `json:"key"`
	Modifiers []string `json:"modifiers"`
}

type _KeyboardPressResponse KeyboardPressResponse

// NewKeyboardPressResponse instantiates a new KeyboardPressResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewKeyboardPressResponse(success bool, key string, modifiers []string) *KeyboardPressResponse {
	this := KeyboardPressResponse{}
	this.Success = success
	this.Key = key
	this.Modifiers = modifiers
	return &this
}

// NewKeyboardPressResponseWithDefaults instantiates a new KeyboardPressResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewKeyboardPressResponseWithDefaults() *KeyboardPressResponse {
	this := KeyboardPressResponse{}
	return &this
}

// GetSuccess returns the Success field value
func (o *KeyboardPressResponse) GetSuccess() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.Success
}

// GetSuccessOk returns a tuple with the Success field value
// and a boolean to check if the value has been set.
func (o *KeyboardPressResponse) GetSuccessOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Success, true
}

// SetSuccess sets field value
func (o *KeyboardPressResponse) SetSuccess(v bool) {
	o.Success = v
}

// GetKey returns the Key field value
func (o *KeyboardPressResponse) GetKey() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Key
}

// GetKeyOk returns a tuple with the Key field value
// and a boolean to check if the value has been set.
func (o *KeyboardPressResponse) GetKeyOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Key, true
}

// SetKey sets field value
func (o *KeyboardPressResponse) SetKey(v string) {
	o.Key = v
}

// GetModifiers returns the Modifiers field value
func (o *KeyboardPressResponse) GetModifiers() []string {
	if o == nil {
		var ret []string
		return ret
	}

	return o.Modifiers
}

// GetModifiersOk returns a tuple with the Modifiers field value
// and a boolean to check if the value has been set.
func (o *KeyboardPressResponse) GetModifiersOk() ([]string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Modifiers, true
}

// SetModifiers sets field value
func (o *KeyboardPressResponse) SetModifiers(v []string) {
	o.Modifiers = v
}

func (o KeyboardPressResponse) MarshalJSON() ([]byte, error) {
	toSerialize, err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o KeyboardPressResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["success"] = o.Success
	toSerialize["key"] = o.Key
	toSerialize["modifiers"] = o.Modifiers
	return toSerialize, nil
}

func (o *KeyboardPressResponse) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"success",
		"key",
		"modifiers",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err
	}

	for _, requiredProperty := range requiredProperties {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varKeyboardPressResponse := _KeyboardPressResponse{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varKeyboardPressResponse)

	if err != nil {
		return err
	}

	*o = KeyboardPressResponse(varKeyboardPressResponse)

	return err
}

type NullableKeyboardPressResponse struct {
	value *KeyboardPressResponse
	isSet bool
}

func (v NullableKeyboardPressResponse) Get() *KeyboardPressResponse {
	return v.value
}

func (v *NullableKeyboardPressResponse) Set(val *KeyboardPressResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableKeyboardPressResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableKeyboardPressResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableKeyboardPressResponse(val *KeyboardPressResponse) *NullableKeyboardPressResponse {
	return &NullableKeyboardPressResponse{value: val, isSet: true}
}

func (v NullableKeyboardPressResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableKeyboardPressResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}
