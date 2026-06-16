import Box from "../Box/Box";
export default function InputTemperatura({etichetta, valore, onChange}) {
  return (
    <Box>
      <label htmlFor="temp">{etichetta}</label>
      <input type="number" name="temp" id="temp" value={valore.toFixed(2)} onChange={e => onChange(e.target.value)} />
    </Box>
  );
}