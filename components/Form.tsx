import { Field, Select } from "@headlessui/react";
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

const mcs: MC[] = nicknames
  .map((nickname, id) => ({ id: id + 1, nickname }))
  .sort((a, b) => a.nickname.localeCompare(b.nickname));

interface Props {
  id: number;
  setId: (id: number) => void;
}

export function Form(props: Props) {
  return (
    <Field>
      <Select
        defaultValue={5}
        className={classNames(
          "mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
          // Make the text of each option black on Windows
          "*:text-black",
        )}
        value={props.id}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedId = parseInt(event.target.value, 10);
          const selectedMc = mcs.find((mc) => mc.id === selectedId);
          if (selectedMc) {
            props.setId(selectedMc.id);
          }
        }}
      >
        {mcs.map((mc) => (
          <option key={mc.id} value={mc.id}>
            {mc.nickname}
          </option>
        ))}
      </Select>
    </Field>
  );
}
