<template>
	<div
		class="relative mx-auto my-[20px] flex w-[90lvw] max-w-[880px] flex-col gap-y-[15px] border-l-[18px] border-primary px-[80px] py-[50px] shadow-glow [--left-col-width:130px] print:m-0 print:w-full print:max-w-none print:shadow-none"
	>
		<div>
			<h1 class="mb-[10px] text-primary">
				{{ data.personalInfo.name }}
			</h1>

			<h2 class="mb-[5px] text-primary">
				{{ data.personalInfo.title }}
			</h2>

			<div class="flex items-center gap-x-[6px] text-[12px]">
				<div>{{ data.personalInfo.location }}</div>
				&bull;
				<div>{{ data.personalInfo.email }}</div>
				&bull;
				<div>{{ data.personalInfo.linkedin }}</div>
			</div>
		</div>

		<div>
			{{ data.summary }}
		</div>

		<div class="_mt-[35px]">
			<h3 class="border-b-section border-primary text-primary">
				Work Experience
			</h3>

			<div
				class="grid grid-cols-[var(--left-col-width)_1fr] gap-x-[25px] gap-y-[10px]"
			>
				<template v-for="(exp, index) in data.experience" :key="index">
					<div>
						<div class="font-semibold">
							{{ exp.startDate }} - {{ exp.endDate ?? 'Present' }}
						</div>

						<div>{{ exp.location }}</div>
					</div>

					<div>
						<div class="font-semibold">{{ exp.company }}</div>

						<div class="flex flex-col gap-y-[10px]">
							<div
								v-for="position in exp.positions"
								:key="position.title"
							>
								<div
									class="mb-[4px] flex items-center gap-x-[5px]"
								>
									<h4 class="text-primary">
										{{ position.title }}
									</h4>

									<div
										v-if="position.startDate"
										class="text-gray-600 italic"
									>
										({{ position.startDate }} -
										{{ position.endDate ?? 'Present' }})
									</div>
								</div>

								<ul class="list-disc ps-[20px]">
									<li
										v-for="description in position.descriptions"
										:key="description"
									>
										{{ description }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>

		<div>
			<h3 class="border-b-section border-primary text-primary">
				Projects
			</h3>

			<div
				class="grid grid-cols-[var(--left-col-width)_1fr] gap-x-[25px] gap-y-[10px]"
			>
				<template v-for="(proj, index) in data.projects" :key="index">
					<div class="font-semibold">
						{{ proj.date }}
					</div>

					<div>
						<div class="font-semibold">
							{{ proj.company }}
						</div>

						<div class="flex flex-col">
							<div class="mb-[4px] flex items-center gap-x-[5px]">
								<h4 class="text-primary">
									{{ proj.name }}
								</h4>
							</div>

							<div class="mb-[8px]">
								<ul class="list-disc ps-[20px]">
									<li
										v-for="description in proj.descriptions"
										:key="description"
									>
										{{ description }}
									</li>
								</ul>
							</div>

							<div
								v-if="proj.technologies"
								class="text-gray-600 italic"
							>
								Technologies: {{ proj.technologies.join(', ') }}
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>

		<div>
			<h3 class="border-b-section border-primary text-primary">
				Education
			</h3>

			<div
				class="grid grid-cols-[var(--left-col-width)_1fr] gap-x-[25px] gap-y-[10px]"
			>
				<div>
					<div class="font-semibold">
						{{ data.education.date }}
					</div>

					<div>{{ data.education.location }}</div>
				</div>

				<div>
					<div class="font-semibold">
						{{ data.education.school }}
					</div>

					<h4 class="text-primary">
						{{ data.education.degree }}
					</h4>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { data } from '@/content/data';
</script>
