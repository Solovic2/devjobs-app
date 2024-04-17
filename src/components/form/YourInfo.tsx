type YourInfoData = {
  name: string;
  email: string;
  phone: string;
};
type YourInfoProps = YourInfoData & {
  updateFields: (fields: Partial<YourInfoData>) => void;
};
const YourInfo = ({ name, email, phone, updateFields }: YourInfoProps) => {
  return (
    <>
      <div>
        <label htmlFor="name">Name</label>
        <input
          autoFocus
          required
          type="text"
          id="name"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          autoFocus
          required
          type="email"
          id="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="phone">Number</label>
        <input
          autoFocus
          required
          type="phone"
          id="phone"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
    </>
  );
};
export default YourInfo;
