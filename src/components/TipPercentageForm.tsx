import { Dispatch, SetStateAction } from "react" // Estos import son para simplificar el Type de setTip

const tipOptions = [
  {
    id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]
  type TipPercentageFormProps = {
    setTip: Dispatch<SetStateAction<number>>//Este type es inferido por visual studio en el archivo useOrder.ts
    tip: number
  }
  
export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="text-2xl font-black mb-3">Propinas</h3>

        <form>
            {tipOptions.map( tipOption => (
                <div
                    className="flex gap-2"
                    key={tipOption.id}
                >
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => setTip( +e.target.value)}//El signo + convierte el string de e.target.value a number
                        checked={tipOption.value === tip}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
