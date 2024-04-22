import React from 'react';
import './Form.css';
import Subjects from './subjects.json';
import Exams from './exam.json';
import { Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { Controller, useForm } from "react-hook-form";

// 教科の読み込み
const groupedOptions = [];
for (var i in Subjects.subjectAreas) {
  const subjectArea = Subjects.subjectAreas[i];

  const subjects = [];
  for (var j in subjectArea.subjects) {
    const subject = subjectArea.subjects[j];

    subjects.push({
      label: subject.label,
      value: subject.symbol
    });
  }

  groupedOptions.push(subjects.map(e => <MenuItem value={e.value} key={uuidv4()}>{e.label}</MenuItem>));
}

// Examの読み込み
const examOptions = [];
for (var e in Exams) {
  const exam = Exams[e];

  examOptions.push(exam);
}
const examMenuItems = examOptions.map(exam => <MenuItem value={exam.name} key={uuidv4()}>{`${exam.name} (${exam.date})`}</MenuItem>);

const Form = () => {
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      score: "",
      subject: [],
      exam: "",
    },
  });
  const onSubmit = (data) => console.log(data)

  const validationRules = {
    score: {
      validate: (value) => value !== "" || "必須項目です"
    },
    subject: {
      validate: (value) => (value.length > 0 || value !== "") || "必須項目です"
    },
    exam: {
      validate: (value) => value !== "" || "必須項目です"
    }
  }

  const selectedExam = watch("exam");

  return (
    <div className='form'>
      <Controller
        name='score'
        control={control}
        rules={validationRules.score}
        render={({ field, fieldState }) => (
          <FormControl sx={{ m: 1, minWidth: 100 }} error={fieldState.invalid}>
            <InputLabel id="score-label">点数</InputLabel>
            <Select labelId='score-label' label="点数" {...field}>
              <MenuItem value="">選択してください</MenuItem>
              {[...Array(101)].map((_, i) => <MenuItem value={i} key={i}>{i}</MenuItem>)}
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name='subject'
        control={control}
        rules={validationRules.subject}
        render={({ field, fieldState }) => (
          <FormControl sx={{ m: 1, minWidth: 500 }} error={fieldState.invalid} disabled={selectedExam !== "Custom"}>
            <InputLabel id="subject-label">科目（複数選択）</InputLabel>
            <Select
              labelId='subject-label'
              label='科目（複数選択）'
              multiple
              {...field}>
              {groupedOptions}
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
      <Controller
        name='exam'
        control={control}
        rules={validationRules.exam}
        render={({ field, fieldState }) => (
          <FormControl sx={{ m: 1, minWidth: 300 }} error={fieldState.invalid}>
            <InputLabel id="exam-label">模試</InputLabel>
            <Select
              labelId='exam-label'
              label="模試"
              {...field}
              onChange={(e) => {
                field.onChange(e);
                const examName = e.target.value;
                if (examName !== "Custom") {
                  setValue("subject", examOptions.find(val => examName === val.name).subjects);
                } else {
                  setValue("subject", []);
                }
              }}>
              {examMenuItems}
              <MenuItem value="Custom">カスタム</MenuItem>
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
      <Button variant='outlined' onClick={handleSubmit(onSubmit)}>決定</Button>
    </div>
  );
}

export default Form;
