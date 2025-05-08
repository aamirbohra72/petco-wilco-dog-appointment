<template>
    <div class="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen p-6">
        <div class="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <!-- Dashboard Header -->
            <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="flex items-center mb-4 md:mb-0">
                        <div class="bg-white p-2 rounded-lg mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-white">
                                Paws & Claws Grooming
                            </h1>
                            <p class="text-purple-200">Appointment Management Dashboard</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span
                            class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                            <span class="h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                            Online
                        </span>
                        <div class="relative">
                            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100"
                                alt="Groomer profile" />
                            <span
                                class="absolute bottom-0 right-0 transform translate-y-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dashboard Content -->
            <div class="p-6">
                <div class="flex flex-col md:flex-row justify-between items-center mb-6">
                    <h2 class="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
                        Manage Appointments
                    </h2>

                    <!-- Stats Cards -->
                    <div class="grid grid-cols-3 gap-4">
                        <div class="bg-blue-50 p-3 rounded-lg text-center">
                            <p class="text-sm text-blue-600 font-medium">Pending</p>
                            <p class="text-xl font-bold text-blue-800">{{ pendingCount }}</p>
                        </div>
                        <div class="bg-green-50 p-3 rounded-lg text-center">
                            <p class="text-sm text-green-600 font-medium">Confirmed</p>
                            <p class="text-xl font-bold text-green-800">
                                {{ confirmedCount }}
                            </p>
                        </div>
                        <div class="bg-red-50 p-3 rounded-lg text-center">
                            <p class="text-sm text-red-600 font-medium">Cancelled</p>
                            <p class="text-xl font-bold text-red-800">{{ cancelledCount }}</p>
                        </div>
                    </div>
                </div>

                <!-- Filter Section -->
                <div class="bg-gray-50 p-4 rounded-lg mb-6">
                    <div class="flex flex-col md:flex-row md:items-center">
                        <div class="mb-4 md:mb-0 md:mr-4">
                            <label for="status" class="block mb-2 text-sm font-medium text-gray-700">Filter by
                                Status:</label>
                            <select v-model="selectedStatus" @change="applyFilters"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5">
                                <option value="">All Appointments</option>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="cancelled">Cancelled</option>
                            </select>
                        </div>
                        <div class="flex-1">
                            <label for="search" class="block mb-2 text-sm font-medium text-gray-700">Search:</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="text" id="search" v-model="searchTerm" @input="applyFilters"
                                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 p-2.5"
                                    placeholder="Search by pet name, customer, or email..." />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Appointment Cards -->
                <div v-if="filteredAppointments.length > 0"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div v-for="appointment in filteredAppointments" :key="appointment.id"
                        @click="viewDetails(appointment)"
                        class="bg-white border rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-300">
                        <div class="p-3 text-white font-medium" :class="{
                            'bg-yellow-500': appointment.appointment_status === 'pending',
                            'bg-green-500': appointment.appointment_status === 'confirmed',
                            'bg-red-500': appointment.appointment_status === 'cancelled',
                        }">
                            {{ formatDate(appointment.date) }} |
                            {{ appointment.time_slot.start_time }} -
                            {{ appointment.time_slot.end_time }}
                        </div>
                        <div class="p-4">
                            <div class="flex items-start mb-3">
                                <div class="bg-purple-100 rounded-full p-2 mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-600" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-800">
                                        {{ appointment.pet.name }}
                                    </h3>
                                    <p class="text-sm text-gray-600">
                                        {{ appointment.pet.breed }}
                                    </p>
                                </div>
                            </div>

                            <div class="space-y-2 text-sm">
                                <div class="flex">
                                    <span class="text-gray-500 w-24">Customer:</span>
                                    <span class="font-medium text-gray-800">{{ appointment.customer.first_name }}
                                        {{ appointment.customer.last_name }}</span>
                                </div>
                                <div class="flex">
                                    <span class="text-gray-500 w-24">Email:</span>
                                    <span class="font-medium text-gray-800 truncate">{{
                                        appointment.customer.email
                                        }}</span>
                                </div>
                                <div class="flex">
                                    <span class="text-gray-500 w-24">Location:</span>
                                    <span class="font-medium text-gray-800 truncate">{{
                                        appointment.location_address.address
                                        }}</span>
                                </div>
                            </div>

                            <div class="mt-4 flex justify-end">
                                <span class="text-xs font-medium px-2.5 py-0.5 rounded-full" :class="{
                                    'bg-yellow-100 text-yellow-800':
                                        appointment.appointment_status === 'pending',
                                    'bg-green-100 text-green-800':
                                        appointment.appointment_status === 'confirmed',
                                    'bg-red-100 text-red-800':
                                        appointment.appointment_status === 'cancelled',
                                }">
                                    {{
                                        appointment.appointment_status.charAt(0).toUpperCase() +
                                        appointment.appointment_status.slice(1)
                                    }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Empty State -->
                <div v-if="filteredAppointments.length === 0"
                    class="bg-white border border-gray-200 rounded-lg p-8 text-center">
                    <div class="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 class="text-lg font-medium text-gray-900 mb-1">
                        No appointments found
                    </h3>
                    <p class="text-gray-500">
                        Try changing your filter settings or check back later.
                    </p>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <transition enter-active-class="transition duration-200 ease-out"
            leave-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 translate-y-10"
            enter-to-class="opacity-100 translate-y-0" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-10">
            <SfModal v-model="isOpen" class="max-w-[90%] md:max-w-lg" tag="section" role="alertdialog"
                aria-labelledby="modalTitle" aria-describedby="modalDesc">
                <header class="border-b pb-4">
                    <SfButton square variant="tertiary" class="absolute right-2 top-2" @click="close">
                        <SfIconClose />
                    </SfButton>
                    <h3 id="modalTitle" class="font-bold text-xl text-gray-900">
                        Appointment Details
                    </h3>
                </header>

                <div v-if="selectedAppointment" class="py-4">
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg">
                                {{ selectedAppointment.pet.name }}
                            </h4>
                            <p class="text-gray-600">
                                {{ formatDate(selectedAppointment.date) }} |
                                {{ selectedAppointment.time_slot.start_time }} -
                                {{ selectedAppointment.time_slot.end_time }}
                            </p>
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-lg p-4 mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Pet Information</h5>
                        <div class="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span class="text-gray-500">Breed:</span>
                                <span class="font-medium ml-1">{{
                                    selectedAppointment.pet.breed
                                    }}</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Certification:</span>
                                <span class="font-medium ml-1">{{
                                    selectedAppointment.certification_required
                                        ? "Required"
                                    : "Required"
                                    }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 rounded-lg p-4 mb-4">
                        <h5 class="font-medium text-gray-700 mb-2">Customer Information</h5>
                        <div class="space-y-2 text-sm">
                            <div>
                                <span class="text-gray-500">Name:</span>
                                <span class="font-medium ml-1">{{ selectedAppointment.customer.first_name }}
                                    {{ selectedAppointment.customer.last_name }}</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Email:</span>
                                <span class="font-medium ml-1">{{
                                    selectedAppointment.customer.email
                                    }}</span>
                            </div>
                            <div>
                                <span class="text-gray-500">Previous Contact:</span>
                                <span class="font-medium ml-1">{{
                                    selectedAppointment.customer.previous_contact || "N/A"
                                    }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-2 mt-6">
                        <SfButton class="flex-1 !bg-green-600 hover:!bg-green-700"
                            @click="confirmAction('confirmed', selectedAppointment.groomer.id)" :disabled="isUpdating">
                            {{ isUpdating ? 'Processing...' : 'Accept Appointment' }}
                        </SfButton>
                        <SfButton variant="secondary" class="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                            @click="showNoteField = true" :disabled="isUpdating">
                            Reject
                        </SfButton>
                    </div>

                    <div v-if="showNoteField" class="mt-4">
                        <label for="note" class="block font-medium text-gray-700 mb-1">Rejection Reason:</label>
                        <textarea v-model="rejectionNote" rows="3"
                            class="w-full border border-gray-300 rounded-lg p-2 focus:ring-purple-500 focus:border-purple-500"
                            placeholder="e.g., Time slot not available, Pet requires special care..."></textarea>
                        <SfButton class="mt-2 !bg-red-600 hover:!bg-red-700"
                            @click="confirmAction('cancelled', selectedAppointment.groomer.id)" :disabled="isUpdating">
                            {{ isUpdating ? 'Processing...' : 'Submit Rejection' }}
                        </SfButton>
                    </div>
                </div>
            </SfModal>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";
import {
    SfModal,
    SfButton,
    SfIconClose,
    useDisclosure,
} from "@storefront-ui/vue";

const selectedStatus = ref("");
const appointments = ref<any[]>([]);
const allAppointments = ref<any[]>([]); // Store all appointments for filtering
const selectedAppointment = ref<any | null>(null);
const showNoteField = ref(false);
const rejectionNote = ref("");
const isUpdating = ref(false);
const searchTerm = ref(""); // Add search term ref

const { isOpen, open, close } = useDisclosure({ initialValue: false });

// const groomerId = "groomer_01JT0F0Z0BSEHJ3RS8RHG0C2G5"; // Replace dynamically as needed
//groomer_01JT0RSCGGMZX31C8MV779APVE, groomer_01JT0RR04JCFSVRCTPQZ0B4QTR, groomer_01JT0F93CTZC7W2P49QBJRW5JY

const API_BASE_URL = "http://localhost:9000"; // Define base URL for API calls

const fetchAppointments = async () => {
    try {
        const response = await axios.get(
            // `${API_BASE_URL}/store/appointment?groomer_id=${groomerId}`,
            `${API_BASE_URL}/store/appointment`,

            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );

        if (Array.isArray(response.data.appointment)) {
            allAppointments.value = response.data.appointment; // Store all appointments
            applyFilters(); // Apply filters to set the filtered appointments
        } else {
            allAppointments.value = [];
            appointments.value = [];
        }
    } catch (error) {
        console.error("Error fetching appointments:", error);
        allAppointments.value = [];
        appointments.value = [];
    }
};

// New function to apply both status and search filters
const applyFilters = () => {
    let filtered = [...allAppointments.value];

    // Apply status filter if selected
    if (selectedStatus.value) {
        filtered = filtered.filter(
            appt => appt.appointment_status === selectedStatus.value
        );
    }

    // Apply search filter if search term exists
    if (searchTerm.value.trim()) {
        const search = searchTerm.value.toLowerCase().trim();
        filtered = filtered.filter(appt => {
            // Search in pet name
            if (appt.pet?.name?.toLowerCase().includes(search)) return true;

            // Search in pet breed
            if (appt.pet?.breed?.toLowerCase().includes(search)) return true;

            // Search in customer name (first and last)
            const fullName = `${appt.customer?.first_name || ''} ${appt.customer?.last_name || ''}`.toLowerCase();
            if (fullName.includes(search)) return true;

            // Search in customer email
            if (appt.customer?.email?.toLowerCase().includes(search)) return true;

            // Search in location address
            if (appt.location_address?.address?.toLowerCase().includes(search)) return true;

            return false;
        });
    }

    appointments.value = filtered;
};

// Computed property for filtered appointments (replaced with direct variable)
const filteredAppointments = computed(() => {
    return appointments.value;
});

const viewDetails = (appointment: any) => {
    selectedAppointment.value = appointment;
    showNoteField.value = false;
    rejectionNote.value = "";
    open();
};

const confirmAction = async (status: string, groomerId: string) => {
    if (!selectedAppointment.value) return;

    isUpdating.value = true; // Show loading state

    try {
        const payload = {
            appointment_id: selectedAppointment.value.id,
            groomer_id: groomerId,
            status,
            note: status === "cancelled" ? rejectionNote.value : undefined,
        };

        // Use axios instead of fetch for consistency
        const response = await axios.post(
            `${API_BASE_URL}/store/appointment/updateStatus`,
            payload,
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );

        console.log("Status update response:", response.data);

        // Update the local appointment status for immediate UI feedback
        if (selectedAppointment.value) {
            selectedAppointment.value.appointment_status = status;

            // Also update in our arrays
            const apptIndex = allAppointments.value.findIndex(a => a.id === selectedAppointment.value?.id);
            if (apptIndex !== -1) {
                allAppointments.value[apptIndex].appointment_status = status;
            }

            // Reapply filters to update the UI
            applyFilters();
        }

        // Close the modal
        close();
    } catch (error) {
        console.error("Error updating appointment status:", error);
        alert("Failed to update appointment status. Please try again.");
    } finally {
        isUpdating.value = false; // Hide loading state
    }
};

// Helper functions for stats
const pendingCount = computed(() => {
    return filteredAppointments.value.filter((a) => a.appointment_status === "pending")
        .length;
});

const confirmedCount = computed(() => {
    return filteredAppointments.value.filter((a) => a.appointment_status === "confirmed")
        .length;
});

const cancelledCount = computed(() => {
    return filteredAppointments.value.filter((a) => a.appointment_status === "cancelled")
        .length;
});

// Format date helper
const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(() => {
    fetchAppointments();
});
</script>