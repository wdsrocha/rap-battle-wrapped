import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import classNames from "classnames";

interface MC {
  id: number;
  nickname: string;
}

const nicknames: string[] = [
  "Hope",
  "Menor",
  "Coy",
  "Onec",
  "Akbar",
  "Pedro",
  "Xavier",
  "Benevides",
  "Enma",
  "RK",
  "Killer",
  "Mont",
  "Drey",
  "W",
  "Android 17",
  "Mano P",
  "James",
  "Knov",
  "BMC",
  "Cauã",
  "Sharp",
  "Isa",
  "Colly",
  "Kize",
  "Big Xang",
  "Pura",
  "Bety",
  "Blink",
  "Manogê",
  "Reyes",
  "Edzin",
  "LKzin",
  "Niel",
  "FL",
  "Wasi",
  "DN7",
  "Giza",
  "Jhones",
  "Júnior",
  "Piula",
  "Smolk",
  "Dante",
  "Bean",
  "LH",
  "Menor Block",
  "WF",
  "PRM",
  "Rafah Black",
  "Dark",
  "JF",
  "PH",
  "WR",
  "Brown",
  "Magrinho",
  "Gusta",
  "Yuggo",
  "WS",
  "MT",
  "Teaz",
  "Nestor",
  "WE",
  "DMK",
  "Ducarmo",
  "Ryuga",
  "Street",
  "Barb",
  "Doka",
  "Tico",
  "Truu",
  "Calvert",
  "Ferrê",
  "Góes",
  "JC",
  "Teusin",
  "Ban",
  "Biels",
  "Jhonx",
  "VH",
  "VJ",
  "Dog",
  "Espantalho",
  "Gênio",
  "Kadu",
  "Leon ZN",
  "NJ",
  "Noan",
  "Pombo",
  "Sagaz",
  "Torres",
  "Caverna",
  "Davieno",
  "FP Swag",
  "Hendro",
  "Lázaro",
  "Luan UDV",
  "WB16",
  "Acura",
  "Blacki",
  "Boninho",
  "Cacique",
  "Caff",
  "Carlitos",
  "Eddy",
  "Elle",
  "Guinho",
  "JL",
  "JR",
  "JV",
  "Kamú",
  "Kanope",
  "Kzzin",
  "Lebre",
  "LT",
  "Luz",
  "Medeiro",
  "Neto",
  "Paiva",
  "Pires",
  "Reis",
  "Ricky",
  "Santos",
  "Sementinha",
  "Tarantino",
  "WG7",
  "Will",
  "Woody",
];

const mcs: MC[] = nicknames.map((nickname, id) => ({ id: id + 1, nickname })); // 1-indexed

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export function Form(props: Props) {
  const { value, setValue } = props;
  const [selectedPerson, setSelectedPerson] = useState<MC>({
    id: 0,
    nickname: "",
  });

  const filteredmcs =
    value === ""
      ? mcs
      : mcs.filter((person) => {
          return person.nickname.toLowerCase().includes(value.toLowerCase());
        });

  return (
    // TODO
    // when enter is pressed while the string isn't in the list, DON'T auto
    // select the last one.
    // also, it should display empty message when the search finds zero results
    <Combobox
      as="div"
      className="w-full"
      value={selectedPerson}
      onChange={(s) => {
        setSelectedPerson(s);
        setValue(s.nickname);
      }}
    >
      <Combobox.Label className="block text-center text-sm font-medium leading-6 text-slate-50"></Combobox.Label>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-slate-900 py-1.5 pl-3 pr-10 text-slate-50 shadow-sm ring-1 ring-inset ring-slate-600 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          onChange={(event) => setValue(event.target.value)}
          displayValue={(person: MC) => person?.nickname}
          placeholder="Big Xang"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-slate-600"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredmcs.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-900 px-1 py-1 text-base shadow-lg ring-1 ring-slate-600 focus:outline-none sm:text-sm">
            {filteredmcs.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none rounded py-2 pl-3 pr-9",
                    active ? "bg-slate-600 text-slate-50" : "text-slate-50",
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold",
                      )}
                    >
                      {person.nickname}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-slate-50" : "text-orange-600",
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
