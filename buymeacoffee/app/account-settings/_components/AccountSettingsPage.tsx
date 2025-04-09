import ProfileSettings from "./ProfileSettings";
import PasswordSettings from "./PasswordSettings";
import PaymentSettings from "./PaymentSettings";
import SuccessMessageSettings from "./SuccessMessageSettings";

const AccountSettingsPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 space-y-6">
      <ProfileSettings />
      <PasswordSettings />
      <PaymentSettings />
      <SuccessMessageSettings />
    </div>
  );
};

export default AccountSettingsPage;
