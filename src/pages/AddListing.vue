<template>
    <Header />
    <div class="w-full h-auto flex justify-center items-center mt-16">
        <div class="w-1/2 h-auto flex flex-col justify-start items-start">
            <div class="w-full h-10 flex justify-center items-center">
                <p class="text-black font-medium text-3xl">
                    ლისტინგის დამატება
                </p>
            </div>
            <div
                class="w-full h-14 flex flex-col justify-start items-start mt-16 space-y-6"
            >
                <p class="text-black">გარიგების ტიპი</p>
                <div
                    class="w-full h-auto flex justify-start items-center space-x-6"
                >
                    <span class="flex justify-start items-center space-x-3">
                        <input type="radio" name="is_rental" />
                        <p class="text-black">ქირავდება</p>
                    </span>
                    <span class="flex justify-start items-center space-x-3">
                        <input type="radio" name="is_rental" />
                        <p class="text-black">იყიდება</p>
                    </span>
                </div>
            </div>
            <div
                class="w-full h-auto mt-20 flex flex-col justify-start items-start space-y-8"
            >
                <div class="w-full h-auto flex justify-start items-center">
                    <p class="text-xl text-black font-medium">მდებარეობა</p>
                </div>
                <div
                    class="w-full h-auto flex justify-center items-center space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">მისამართი *</p>
                        <input
                            type="text"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p class="text-black text-sm">მინიმუმ 2 სიმბოლო</p>
                    </div>
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">საფოსტო ინდექსი *</p>
                        <input
                            type="text"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p class="text-black text-sm">მხოლოდ ციფრები</p>
                    </div>
                </div>
                <div
                    class="w-full h-auto flex justify-center items-center space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">რეგიონი *</p>
                        <select
                            name=""
                            id=""
                            class="w-full h-10 rounded-xl border border-black px-2"
                        >
                            <option v-for="n in 4" :key="n" value="#">
                                lorem ipsum
                            </option>
                        </select>
                    </div>
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">ქალაქი *</p>
                        <select
                            name=""
                            id=""
                            class="w-full h-10 rounded-xl border border-black px-2"
                        >
                            <option v-for="n in 4" :key="n" value="#">
                                lorem ipsum
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div
                class="w-full h-auto mt-16 flex flex-col justify-start items-start space-y-8"
            >
                <p class="text-xl font-medium text-black">ბინის დეტალები</p>
                <div
                    class="w-full h-auto flex justify-start items-start space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">ფასი *</p>
                        <input
                            type="text"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p class="text-black text-sm">მხოლოდ ციფრები</p>
                    </div>
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">ფართობი *</p>
                        <input
                            type="text"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p class="text-black text-sm">მხოლოდ ციფრები</p>
                    </div>
                </div>
                <div
                    class="w-full h-auto flex justify-start items-start space-x-6"
                >
                    <div
                        class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                    >
                        <p class="text-sm text-black">
                            საძინებლების რაოდენობა *
                        </p>
                        <input
                            type="text"
                            class="w-full h-10 rounded-xl border border-black px-2 text-sm"
                        />
                        <p class="text-black text-sm">მხოლოდ ციფრები</p>
                    </div>
                </div>
                <div
                    class="w-full h-auto flex flex-col justify-start items-start space-y-3"
                >
                    <p class="text-black">აღწერა *</p>
                    <textarea
                        class="w-full h-[135px] border border-black rounded-xl"
                    ></textarea>
                    <p class="text-sm text-black">მინიმუმ 5 სიტყვა</p>
                </div>
                <div
                    class="w-full h-auto flex flex-col justify-start items-start space-y-3"
                >
                    <p class="text-black">ატვირთეთ ფოტო *</p>
                    <div
                        class="w-full h-[135px] border border-black border-dashed flex justify-center items-center rounded-xl"
                    >
                        <Icon icon="add-photo" size="size-6" />
                    </div>
                </div>
                <div
                    class="w-full h-auto mt-20 flex flex-col justify-start items-start space-y-6"
                >
                    <div class="w-full h-auto flex justify-start items-center">
                        <p class="text-xl text-black font-medium">აგენტი</p>
                    </div>
                    <div
                        class="w-full h-auto flex justify-start items-center space-x-6"
                    >
                        <div
                            class="w-1/2 h-auto flex flex-col justify-start items-start space-y-2"
                        >
                            <p class="text-sm text-black">აირჩიეთ *</p>
                            <select
                                name=""
                                id=""
                                class="w-full h-10 rounded-xl border border-black px-2"
                            >
                                <option v-for="n in 4" :key="n" value="#">
                                    lorem ipsum
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Icon from '@/components/Icon.vue'
</script>