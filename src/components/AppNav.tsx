/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import {
  Autocomplete,
  Dropdown,
  Field,
  Item,
  Label,
  Menu,
} from '@zendeskgarden/react-dropdowns'
import { Col, Row } from '@zendeskgarden/react-grid'
import debounce from 'lodash.debounce'
import React, { useEffect, useRef, useState } from 'react'

const options = [
  'Asparagus',
  'Brussel sprouts',
  'Cauliflower',
  'Garlic',
  'Jerusalem artichoke',
  'Kale',
  'Lettuce',
  'Onion',
  'Mushroom',
  'Potato',
  'Radish',
  'Spinach',
  'Tomato',
  'Yam',
  'Zucchini',
]

const Example = () => {
  const [selectedItem, setSelectedItem] = useState(options[0])
  const [inputValue, setInputValue] = useState('')
  const [matchingOptions, setMatchingOptions] = useState(options)

  /**
   * Debounce filtering
   */
  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const matchedOptions = options.filter(
        (option) =>
          option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
      )

      setMatchingOptions(matchedOptions)
    }, 300)
  )

  useEffect(() => {
    filterMatchingOptionsRef.current(inputValue)
  }, [inputValue])

  return (
    <Row justifyContent='center'>
      <Col sm={5}>
        <Dropdown
          inputValue={inputValue}
          selectedItem={selectedItem}
          onSelect={(item) => setSelectedItem(item)}
          onInputValueChange={(value) => setInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label>Choose a vegetable</Label>
            <Autocomplete>{selectedItem}</Autocomplete>
          </Field>
          <Menu>
            {matchingOptions.length ? (
              matchingOptions.map((option) => (
                <Item key={option} value={option}>
                  <span>{option}</span>
                </Item>
              ))
            ) : (
              <Item disabled>No matches found</Item>
            )}
          </Menu>
        </Dropdown>
      </Col>
    </Row>
  )
}

export default Example
