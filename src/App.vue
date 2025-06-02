<template>
	<div
		class="shadow-glow aspect-a4 border-primary relative mx-auto mt-[20px] flex w-[90lvw] max-w-[880px] flex-col gap-y-[15px] border-l-[18px] px-[80px] py-[50px] [--left-col-width:130px]"
	>
		<div>
			<h1 class="text-primary mb-[10px]">
				{{ data.personalInfo.name }}
			</h1>

			<h2 class="text-primary mb-[5px]">
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
								<div class="flex gap-x-[5px]">
									<h4 class="text-primary mb-[4px]">
										{{ position.title }}
									</h4>

									<div
										v-if="position.startDate"
										class="italic text-gray-600"
									>
										({{ position.startDate }} -
										{{ position.endDate ?? 'Present' }})
									</div>
								</div>

								<ul class="list-disc ps-[20px]">
									<li
										v-for="achievement in position.achievements"
										:key="achievement"
									>
										{{ achievement }}
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
						{{ proj.company }}
					</div>

					<div>
						<div class="font-semibold">
							{{ proj.positions.join(', ') }}
						</div>

						<div class="flex flex-col">
							<div class="mb-[4px] flex gap-x-[5px]">
								<h4 class="text-primary">
									{{ proj.title }}
								</h4>
							</div>

							<div class="mb-[8px]">{{ proj.description }}</div>

							<div class="italic text-gray-600">
								Tech Stack: {{ proj.technologies.join(', ') }}
							</div>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { data } from '@/content/data';
</script>
