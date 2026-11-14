
import { useState } from "react";
import AdminSidebar from "../Admin/AdminSidebar";
import {
  MapPin,
  Users,
  Search,
  Plus,
  ArrowLeft,
  Pencil,
  Trash2
} from "lucide-react";

const districts = [
  "Thiruvananthapuram",
  "Kollam",
  "Pathanamthitta",
  "Alappuzha",
  "Kottayam",
  "Idukki",
  "Ernakulam",
  "Thrissur",
  "Palakkad",
  "Malappuram",
  "Kozhikode",
  "Wayanad",
  "Kannur",
  "Kasaragod"
];

const initialOfficers = [
  { id: 1, district: "Alappuzha", name: "Officer One", designation: "District Collector" },
  { id: 2, district: "Alappuzha", name: "Officer Two", designation: "Sub Collector" },
  { id: 3, district: "Alappuzha", name: "Officer Three", designation: "Deputy Collector" },
  { id: 4, district: "Ernakulam", name: "Officer Four", designation: "District Collector" },
  { id: 5, district: "Ernakulam", name: "Officer Five", designation: "Sub Collector" },
  { id: 6, district: "Kollam", name: "Officer Six", designation: "District Collector" }
];

const OfficerManagement = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [officers, setOfficers] = useState(initialOfficers);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingOfficer, setEditingOfficer] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    designation: ""
  });

  const districtOfficers = officers.filter(
    (officer) =>
      officer.district === selectedDistrict &&
      (
        officer.name.toLowerCase().includes(search.toLowerCase()) ||
        officer.designation.toLowerCase().includes(search.toLowerCase())
      )
  );

  const openAddForm = () => {
    setEditingOfficer(null);
    setFormData({ name: "", designation: "" });
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingOfficer) {
      setOfficers((prev) =>
        prev.map((officer) =>
          officer.id === editingOfficer.id
            ? { ...officer, ...formData }
            : officer
        )
      );
    } else {
      setOfficers((prev) => [
        ...prev,
        {
          id: Date.now(),
          district: selectedDistrict,
          ...formData
        }
      ]);
    }

    setShowForm(false);
    setEditingOfficer(null);
    setFormData({ name: "", designation: "" });
  };

  const handleEdit = (officer) => {
    setEditingOfficer(officer);
    setFormData({
      name: officer.name,
      designation: officer.designation
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this officer?")) {
      setOfficers((prev) =>
        prev.filter((officer) => officer.id !== id)
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Common Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 min-w-0 p-6 ml-65">

        {!selectedDistrict ? (
          <>
            {/* District Header */}
            <div className="mb-7">
              <h1 className="text-2xl font-bold text-gray-800">
                Officer Management
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Select a district to manage government officers
              </p>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-7 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                <MapPin size={25} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  14 Districts
                </h2>
                <p className="text-sm text-gray-500">
                  Kerala district-wise officer directory
                </p>
              </div>
            </div>

            {/* District Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">

              {districts.map((district) => {
                const count = officers.filter(
                  (officer) => officer.district === district
                ).length;

                return (
                  <button
                    key={district}
                    onClick={() => {
                      setSelectedDistrict(district);
                      setSearch("");
                    }}
                    className="bg-white text-left p-5 rounded-xl shadow-sm border border-gray-100 hover:border-blue-400 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-center mb-5">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                        <MapPin size={22} />
                      </div>

                      <span className="text-xs text-gray-400">
                        View Officers →
                      </span>
                    </div>

                    <h3 className="font-semibold text-gray-800 text-lg">
                      {district}
                    </h3>

                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                      <Users size={16} />
                      {count} Officers
                    </div>
                  </button>
                );
              })}

            </div>
          </>
        ) : (
          <>
            {/* Selected District */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-7">

              <div>
                <button
                  onClick={() => {
                    setSelectedDistrict("");
                    setSearch("");
                  }}
                  className="flex items-center gap-2 text-sm text-blue-600 mb-4 hover:text-blue-800"
                >
                  <ArrowLeft size={17} />
                  Back to Districts
                </button>

                <h1 className="text-2xl font-bold text-gray-800">
                  {selectedDistrict}
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                  Government officers in {selectedDistrict}
                </p>
              </div>

              <button
                onClick={openAddForm}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-lg hover:bg-blue-700"
              >
                <Plus size={18} />
                Add Officer
              </button>

            </div>

            {/* Officer Count */}
            <div className="bg-white rounded-xl p-5 shadow-sm mb-6 flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <Users size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  {districtOfficers.length}
                </h2>
                <p className="text-sm text-gray-500">
                  Officers in {selectedDistrict}
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
              <div className="relative max-w-md">
                <Search
                  size={18}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search officer or designation..."
                  className="w-full border rounded-lg pl-10 pr-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Officer List */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">

              <div className="p-5 border-b">
                <h2 className="font-semibold text-gray-800">
                  Officers List
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">

                  <thead className="bg-gray-50 text-gray-600">
                    <tr>
                      <th className="p-4">Sl No.</th>
                      <th className="p-4">Officer Name</th>
                      <th className="p-4">Designation</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {districtOfficers.map((officer, index) => (
                      <tr key={officer.id} className="border-t hover:bg-gray-50">
                        <td className="p-4">{index + 1}</td>
                        <td className="p-4 font-medium text-gray-800">
                          {officer.name}
                        </td>
                        <td className="p-4 text-gray-600">
                          {officer.designation}
                        </td>
                        <td className="p-4">
                          <div className="flex gap-4">
                            <button
                              onClick={() => handleEdit(officer)}
                              className="text-blue-600"
                              title="Edit"
                            >
                              <Pencil size={18} />
                            </button>

                            <button
                              onClick={() => handleDelete(officer.id)}
                              className="text-red-600"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {districtOfficers.length === 0 && (
                      <tr>
                        <td colSpan="4" className="p-8 text-center text-gray-500">
                          No officers found in this district.
                        </td>
                      </tr>
                    )}
                  </tbody>

                </table>
              </div>
            </div>
          </>
        )}

        {/* Add / Edit Officer Form */}
        {showForm && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">

            <form
              onSubmit={handleSubmit}
              className="bg-white w-full max-w-md rounded-xl p-6 space-y-4"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">
                  {editingOfficer ? "Edit Officer" : "Add New Officer"}
                </h2>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-gray-500"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-gray-500">
                District: {selectedDistrict}
              </p>

              <input
                required
                placeholder="Officer Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                required
                value={formData.designation}
                onChange={(e) =>
                  setFormData({ ...formData, designation: e.target.value })
                }
                className="w-full border rounded-lg p-3 outline-none"
              >
                <option value="">Select Designation</option>
                <option>District Collector</option>
                <option>Sub Collector</option>
                <option>Deputy Collector</option>
                <option>Additional District Magistrate</option>
                <option>Other Officer</option>
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
              >
                {editingOfficer ? "Update Officer" : "Save Officer"}
              </button>

            </form>
          </div>
        )}

      </main>
    </div>
  );
};

export default OfficerManagement;
