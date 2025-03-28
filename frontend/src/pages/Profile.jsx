import { useContext, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../contexts/ShopContext";

function Profile() {
  const [activeTab, setActiveTab] = useState("profile");
  const { user } = useContext(ShopContext);
  console.log(user);
  return (
    <div className="mx-auto max-w-5xl border-t border-gray-200 px-4 py-8 text-2xl">
      {/* Header */}
      <div className="mb-8">
        <Title text1="MY" text2="ACCOUNT" />
        <p className="text-base text-gray-500">
          Manage your account and settings
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-4 border-b border-gray-200 text-base">
        <button
          onClick={() => setActiveTab("profile")}
          className={`pb-4 ${
            activeTab === "profile"
              ? "border-b-2 border-gray-900 text-gray-900"
              : "text-gray-500"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab("addresses")}
          className={`pb-4 ${
            activeTab === "addresses"
              ? "border-b-2 border-gray-900 text-gray-900"
              : "text-gray-500"
          }`}
        >
          Addresses
        </button>
      </div>

      {/* Content */}
      {activeTab === "profile" && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-4 text-lg font-medium">Personal Information</h2>
            <form className="space-y-4 text-base">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Full Name
                </label>
                <input
                  disabled
                  value={user?.name}
                  id="fullName"
                  type="text"
                  className="w-full rounded border border-gray-200 bg-gray-100 px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  disabled
                  value={user.email}
                  id="email"
                  type="email"
                  className="w-full rounded border border-gray-200 bg-gray-100 px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm text-gray-600"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full rounded border border-gray-200 px-3 py-2"
                  placeholder="+1 234 567 890"
                />
              </div>
              <button
                type="submit"
                className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:opacity-90"
              >
                Save Changes
              </button>
            </form>
          </div>

          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="mb-4 text-lg font-medium">Password</h2>
            <form className="space-y-4 text-base">
              <div>
                <label className="mb-1 block text-sm text-gray-600">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full rounded border border-gray-200 px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-600">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full rounded border border-gray-200 px-3 py-2"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full rounded border border-gray-200 px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="rounded bg-gray-900 px-4 py-2 text-sm text-white hover:opacity-90"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}

      {activeTab === "addresses" && (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">Default Address</h2>
              <button className="text-sm text-gray-500 hover:text-gray-900">
                Edit
              </button>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <p>John Doe</p>
              <p>123 Main Street</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
              <p>+1 234 567 890</p>
            </div>
          </div>

          <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-200 p-6">
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-900">
              <span className="text-2xl">+</span>
              Add New Address
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
