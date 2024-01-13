import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import classNames from "classnames";

interface People {
  id: number;
  name: string;
}

// TODO: receive as props
const people: People[] =
  "Xavier, Onec, Enma, Jhones, Mano P, Mont, RK, Menor, James, Big Xang, W, Coy, Magrinho, Hope, Pura, Elle, Pain, Akbar, Sharp, Tarantino, Killer, Blink, Drey, Android 17, Truu, Dark, Benevides, Teaz, Yuggo, Pedro, Smolk, Barb, Neon, Luan UDV, Coreto, Brown, Daoeste, WR, Isa, WS, Davieno, Jogadora, 3N, Calvert, Wasi, Niel, Salomão, Áries, Jottaemi, Will, Nando Kim, Ice Berg, Major, Matheuxx, Vitin, Akashi, Sério, teusin, Evy, Lelê, Mooze, Fontenelle, Manogê, Bety, DN7, Christian, MT, Zeca, PH, Menor Block, DMK, Yonathan, Turok, Castro, tiktok, Leon ZN, Kenny, Eva, JC, Lázaro, FL, LH, Dryka, Sagaz, WO, VH, Duel, Santos, Zack, King, Pires, Giza, Bambata, Sound, Espantalho, Mineiro, DK, Gusta, Gaspar, Kim, Cask, Jarbinha, Sky, Ban, Insano, Kisame, lazaro, Speed, Vini, Golden, Atnavick, Kani, Move, Acura, Matheus, Medusa, TH, Kane, Piula, Skank, LC, Pedrina, Ajota, Novato, Ton, Bean, Kinze, Kappa, Enok, Gui, JM, Mart, Primatinha, Tux, Jorgin, RD, Vinny, Zoom, aries, Cacique, Hotep, Jhzin, Moove, Noan, Ace, andarilho, BXX, cafeina, Dog, GC, Jhonx, Soneca, WK, BabyBoy, BL, Dadinho, DL, Dyego, JV, Miles, MR, Noa, Roog, Street, Rarock, Davi, FP Swag, guilherme, Veneza, Constantine, Gkazin, Kanope, ND7, Railan, Rasta, ronnyn, Suit, Yan, 15, Bactéria, Brizzy, Bronw, Calvin, CHS, Colares, Dan Dan, Daoest, Delta, gabriel, GH, gs, jenkins, Juninho, Kaene, KRK, Menor Lc, MP, Sissinho, Thug, TK, VAN, Verdinho, wl, Biels, FP, Uddy, Átila, Das Ruas, Otavio, TG, Wold, Andrade, Bankai, Black, Caleb, Canibal, DG, Dinho Brau, Droca, Eddy, Erva, FerNando Kim, Gueren, Japinha, JN, Jota, kanibal, Kill, Marlyson, mateuzin, Matheuzinho, PTK, Riff, Zezinho, , 76, Akura, Andreo, Asaf, Barbosa, Bentes, bia, Black Silva, Boladão, Brok, Bruno, Cabralzin, Cafeína, Caff, Caise, Calebe, Caliste, Camuca, Canw, CAP, Cavieira, Chef, Chico, Cicinho, Cirilo, constatine, d2, Dan, Daniel, Danni, DF, Dream, Droka, Dubaile, duzim, Erok, Félix, Felps, Flip, Flordkell, Gean, Gil, Gildo, gk, GMK, Gomes, Grego, Guinho, HJ, Ida, jhonatan, JhonZ, jimer, Jinx, JL, Jone, Kalvin, Kennyzin, Khakiffa, Kings, Layse, Leléo, Lex, Lil Soren, Liner, LK, Lucca, Macoli, Madrugão, manauara, mano df, Marcelo, Mark, Motoboy, Movie, N1, Nathan, Natividade, Nattan, neguinho da capital, Net, NF, Nilson, Noel, NV, Pai da Luna, PHL, Pombo, Portela, Pruma, Quinze, Rafa, RDS, Real le, RMS, RP, Sabota, Sanchez, Saori, Say, Scott, Silveira, SM, Solimões, solt, Spider, Tai, Tarja, Terry, ths, way, WM, Woddy, Xororo, zed, Zezi, Aj, Denni"
    .split(", ")
    .map((x, i) => ({ id: i + 2, name: x }));

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export function Form(props: Props) {
  const { value, setValue } = props;
  const [selectedPerson, setSelectedPerson] = useState<People>({
    id: 0,
    name: "",
  });

  const filteredPeople =
    value === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(value.toLowerCase());
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
        setValue(s.name);
      }}
    >
      <Combobox.Label className="block text-center text-sm font-medium leading-6 text-slate-50"></Combobox.Label>
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-slate-900 py-1.5 pl-3 pr-10 text-slate-50 shadow-sm ring-1 ring-inset ring-slate-600 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          onChange={(event) => setValue(event.target.value)}
          displayValue={(person: People) => person?.name}
          placeholder="Big Xang"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-slate-600"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-900 px-1 py-1 text-base shadow-lg ring-1 ring-slate-600 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
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
                      {person.name}
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
