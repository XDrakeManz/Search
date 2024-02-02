import React, { useState, useCallback, useEffect } from 'react';

const defaultData = [
  {
    nama: 'John Doe',
    nim: '123456789',
    tempatLahir: 'Jakarta',
    fakultas: 'Teknik Informatika',
    jenisKelamin: 'Laki-laki',
  },
  {
    nama: 'Jane Doe',
    nim: '987654321',
    tempatLahir: 'Surabaya',
    fakultas: 'Ilmu Komunikasi',
    jenisKelamin: 'Perempuan',
  },
  {
    nama: 'Alice Smith',
    nim: '567890123',
    tempatLahir: 'Bandung',
    fakultas: 'Ekonomi',
    jenisKelamin: 'Perempuan',
  },
  {
    nama: 'Bob Johnson',
    nim: '321098765',
    tempatLahir: 'Yogyakarta',
    fakultas: 'Kedokteran',
    jenisKelamin: 'Laki-laki',
  },
  {
    nama: 'Eva Williams',
    nim: '789012345',
    tempatLahir: 'Semarang',
    fakultas: 'Hukum',
    jenisKelamin: 'Perempuan',
  },
  {
    nama: 'David Brown',
    nim: '234567890',
    tempatLahir: 'Malang',
    fakultas: 'Psikologi',
    jenisKelamin: 'Laki-laki',
  },
  {
    nama: 'Grace Taylor',
    nim: '876543210',
    tempatLahir: 'Medan',
    fakultas: 'Seni Rupa',
    jenisKelamin: 'Perempuan',
  },
  {
    nama: 'Michael Lee',
    nim: '111222333',
    tempatLahir: 'Palembang',
    fakultas: 'Teknik Sipil',
    jenisKelamin: 'Laki-laki',
  },
  {
    nama: 'Sophia Chen',
    nim: '444555666',
    tempatLahir: 'Makassar',
    fakultas: 'Agama',
    jenisKelamin: 'Perempuan',
  },
  {
    nama: 'Alex Kim',
    nim: '999000111',
    tempatLahir: 'Balikpapan',
    fakultas: 'Filsafat',
    jenisKelamin: 'Laki-laki',
  },
];

// ------------------------------------------------------------------

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setData(defaultData);
  }, []);

  useEffect(() => {
    if (inputValue) {
      const result = data?.filter(
        (d) => d.nama.toLowerCase().indexOf(inputValue?.toLowerCase()) !== -1,
      );

      setData(result);
    } else {
      setData(defaultData);
    }
  }, [inputValue]);

  const handleChangeInputValue = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();

      const filteredData = data.filter(
        (d) => d.nama.toLowerCase() === inputValue.toLowerCase(),
      );

      if (filteredData) {
        setData(filteredData);
      }
    },
    [inputValue],
  );

  return (
    <section className="min-h-screen bg-neutral-800">
      <form
        onSubmit={onSubmitForm}
        className="flex flex-row pt-20 justify-center items-center gap-3"
      >
        <input
          onChange={handleChangeInputValue}
          type="text"
          className="w-96 p-2"
        />
        <input
          type="reset"
          value="reset"
          className="text-neutral-800 bg-white py-2 px-6"
        />
      </form>

      <div className="text-white flex flex-col justify-center items-start mt-5 mx-auto w-32">
        {inputValue &&
          data.map((data, index) => (
            <div key={index} className="">
              {index + 1}. {data.nama}
            </div>
          ))}

        {!data.length && <div className="">Data Tidak Ditemukan!</div>}
      </div>
    </section>
  );
};

export default App;
