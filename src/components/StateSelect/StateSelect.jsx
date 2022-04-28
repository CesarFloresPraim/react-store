/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const states = [
	{
		"name": "Distrito Federal",
		"code": "MX-DIF",
		"subdivision": "federal district"
	},
	{
		"name": "Aguascalientes",
		"code": "MX-AGU",
		"subdivision": "state"
	},
	{
		"name": "Baja California",
		"code": "MX-BCN",
		"subdivision": "state"
	},
	{
		"name": "Baja California Sur",
		"code": "MX-BCS",
		"subdivision": "state"
	},
	{
		"name": "Campeche",
		"code": "MX-CAM",
		"subdivision": "state"
	},
	{
		"name": "Chiapas",
		"code": "MX-CHP",
		"subdivision": "state"
	},
	{
		"name": "Chihuahua",
		"code": "MX-CHH",
		"subdivision": "state"
	},
	{
		"name": "Coahuila",
		"code": "MX-COA",
		"subdivision": "state"
	},
	{
		"name": "Colima",
		"code": "MX-COL",
		"subdivision": "state"
	},
	{
		"name": "Durango",
		"code": "MX-DUR",
		"subdivision": "state"
	},
	{
		"name": "Guanajuato",
		"code": "MX-GUA",
		"subdivision": "state"
	},
	{
		"name": "Guerrero",
		"code": "MX-GRO",
		"subdivision": "state"
	},
	{
		"name": "Hidalgo",
		"code": "MX-HID",
		"subdivision": "state"
	},
	{
		"name": "Jalisco",
		"code": "MX-JAL",
		"subdivision": "state"
	},
	{
		"name": "Michoacán",
		"code": "MX-MIC",
		"subdivision": "state"
	},
	{
		"name": "Morelos",
		"code": "MX-MOR",
		"subdivision": "state"
	},
	{
		"name": "México",
		"code": "MX-MEX",
		"subdivision": "state"
	},
	{
		"name": "Nayarit",
		"code": "MX-NAY",
		"subdivision": "state"
	},
	{
		"name": "Nuevo León",
		"code": "MX-NLE",
		"subdivision": "state"
	},
	{
		"name": "Oaxaca",
		"code": "MX-OAX",
		"subdivision": "state"
	},
	{
		"name": "Puebla",
		"code": "MX-PUE",
		"subdivision": "state"
	},
	{
		"name": "Querétaro",
		"code": "MX-QUE",
		"subdivision": "state"
	},
	{
		"name": "Quintana Roo",
		"code": "MX-ROO",
		"subdivision": "state"
	},
	{
		"name": "San Luis Potosí",
		"code": "MX-SLP",
		"subdivision": "state"
	},
	{
		"name": "Sinaloa",
		"code": "MX-SIN",
		"subdivision": "state"
	},
	{
		"name": "Sonora",
		"code": "MX-SON",
		"subdivision": "state"
	},
	{
		"name": "Tabasco",
		"code": "MX-TAB",
		"subdivision": "state"
	},
	{
		"name": "Tamaulipas",
		"code": "MX-TAM",
		"subdivision": "state"
	},
	{
		"name": "Tlaxcala",
		"code": "MX-TLA",
		"subdivision": "state"
	},
	{
		"name": "Veracruz",
		"code": "MX-VER",
		"subdivision": "state"
	},
	{
		"name": "Yucatán",
		"code": "MX-YUC",
		"subdivision": "state"
	},
	{
		"name": "Zacatecas",
		"code": "MX-ZAC",
		"subdivision": "state"
	}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StateSelect() {
  const [selected, setSelected] = useState(states[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">State</Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {states.map((stat) => (
                  <Listbox.Option
                    key={stat.code}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4'
                      )
                    }
                    value={stat}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {stat.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}