
import { FC } from 'react';
interface FieldProps {
  id: string
  label: string
  value: string
  placeholder: string
  hasError: boolean
  errorText: string
  type: string
  onChange: (value: string) => void
}
const Field: FC<FieldProps> = ({id, label, value, hasError, placeholder, errorText, type, onChange}) => {
    return (
      <div className="field-group">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>
        { hasError
          && (
            <>            
              <img src="./images/icon-error.svg" className="error-icon" alt="error-img" />
              <p className="error-text">{errorText}</p>
            </>
          )
        }
      </div>
    );
}

export default Field;